import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private readonly url = "/api/files/";

  constructor(public http: HttpClient) {
    this.getFiles().subscribe();
  }

  uploadStatus(event: any): { percentage: number, done: boolean } {
    if (event.body) {
      //upload je gotov, prikazi metapodatke filea
    }

    const percentage = Math.round(100 * event.loaded / event.total);
    const done = event.type === HttpEventType.Response;

    return { percentage, done };
  }

  upload(data: any, progressHandler: (percentage: number, done: boolean) => void): Observable<any> {

    let formData: FormData = new FormData();

    formData.append("file", data.file, data.file.name);
    formData.append("description", data.description);

    const req = new HttpRequest("POST", this.url, formData, { reportProgress: true });

    return this.http.request(req)
      .pipe(
        map(event => this.uploadStatus(event)),
        tap((res: { percentage: number, done: boolean }) => {
          const { percentage, done } = res;
          progressHandler(percentage, done);
        })
      );
    // return this.http.post(this.url, file)
    //   .pipe(
    //     tap((res: any) => {
    //       console.log(res);
    //       progressHandler(100, true);
    //     })
    //   );
  }

  getFiles(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
      .pipe(
        tap(
          (files: any[]) => {
            console.log(files);
          }
        )
      )
  }

}
