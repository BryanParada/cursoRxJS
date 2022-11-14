import { Observable } from 'rxjs';

const obs$  = new Observable<string>( subs => {

    subs.next('Hello')
    subs.next('World')

    subs.complete();

    subs.next('This line wont appear after subs.complete')

});

obs$.subscribe( console.log );