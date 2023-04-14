import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, Subscriber, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, finalize, map, retry} from 'rxjs/operators';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {LoginModalComponent} from '../components/login-modal/login-modal.component';
import {StorageService} from '../services/storage/storage.service';

@Injectable()
export class JwtExceptionTokenInterceptor implements HttpInterceptor {
  body = document.body;

  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private storageService: StorageService
  ) {

  }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let initialRequest = request.clone();

    if (request.url.includes(environment.API_PEDIDOS)){
      return next.handle(request).pipe(map(response => {
        return response;
      })).pipe(catchError((error: HttpErrorResponse) => {

        if(error.error?.status === 'AuthenticationFailed'){
          this.storageService.logout();
        }
        return throwError(error);

      })).pipe(
        finalize(() => {
        }  )
      );
    }


    return next.handle(request);

  }

  updateHeader(req) {
    const authToken = this.storageService.getCurrentToken();
    req = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${authToken}`)
    });
    return req;
  }

}
