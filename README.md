<div align="center">

# ⭐ Angular Error Handling ⭐

</div>

Errors are most critical topic we have to be focus on. As we can't get rid of them it is a mandatory to handle the exceptions to improve the user experience in our Apps. In this repo we will use different strategies to do this, for instance how to manage errors globally, how to handle errors in a reactive way([RxJS streams](https://www.learnrxjs.io/learn-rxjs/concepts/rxjs-primer)), and how to build [HTTP_INTERCEPTORS](https://angular.io/api/common/http/HttpInterceptor) to implement a global strategy for failed HTTP requests.

</br>

<div align="center">
  <img width="496" alt="catchError" src="https://user-images.githubusercontent.com/43299285/225589685-1984562e-0d1f-496c-b89c-a0152f4b3fe4.PNG">
  <img width="496" alt="catchError1" src="https://user-images.githubusercontent.com/43299285/225590370-2e35bd2b-4697-4813-85b4-9d381fa0be62.PNG">
</div>

</br>

### Streams 😲😲

Streams are a sequence of values over time. Therefore, to have a better understanding how errors are sent out in reactive programming we have set different logs based on level of [ErrorHandlers] placed in different levels of our exercise(https://www.learnrxjs.io/learn-rxjs/operators/error_handling) (Interceptor, Global Service and Component).

<div align="center">
<img width="457" alt="Streams" src="https://user-images.githubusercontent.com/43299285/225821468-6d9b44b3-4bcf-4f78-b86b-506a807bc8d7.PNG">
</div>

</br>

> **Good Practices**</br>
> 👉 No `console.log` in production.</br>
> 👉 Additional tracking for your global errors.</br>
> 👉 Unified behaviour for all unhandled errors, e.g. Redirect to an error page.

</br>

#### For instance, Global error service and notifications (Not in this project)... 🙌 🙌

⚠️ Note!! Don´t forget to add the service in the app.module to identify any error raised.

```
{
provide: ErrorHandler,
useClass: ErrorHandlingService,
},
```

</br>

#### Multiple errors returned in Http response(400, 401, 403) which are detected to let the user know throughout the notifications service.

<div align="center">
  <img width="458" alt="Error service example" src="https://user-images.githubusercontent.com/43299285/225594301-d59212ad-0848-422e-85f3-be591d9ba7cd.PNG">
</div>

<div align="center">
  <img width="406" alt="Error service notifications" src="https://user-images.githubusercontent.com/43299285/225594496-8b7ceb14-866f-48e4-a0de-2b61e01c3b46.PNG">
</div>

</br>

### How to clone: ✏️

- `git clone https://github.com/JoseMMorales/Error-Handling.git`
- `cd Error-Handling`
- `code .` => If using VSCode
- `npm install`
- `npm start` or `ng serve -o`

### Author 😊

JoseMMorales
