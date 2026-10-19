import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule, Validators, FormGroup, FormControl } from "@angular/forms";

import { FilesService } from "./files.service";
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, NgbProgressbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(protected filesService: FilesService) { }

  form: FormGroup = new FormGroup({
    file: new FormControl("file.txt", [Validators.required]),
    description: new FormControl("My description")
  });

  onFileChange(event: Event) {
    const file = (event.target as any).files[0];
    this.form.patchValue({ file })
  }

  @ViewChild("fileinput") fi: ElementRef = new ElementRef<any>(null);

  percentage: number = 0;
  progressHandler = (percentage: number, done: boolean) => {
    if (isNaN(percentage))
      this.percentage = percentage;

    if (done) {
      console.log("Successfully uploaded");
      this.form.reset();
      // this.percentage = 0;
      this.fi.nativeElement.value = "";
    }
  }

  submit() {
    this.filesService.upload(this.form.value, this.progressHandler).subscribe();
  }
}
