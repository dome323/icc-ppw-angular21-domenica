import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient, withFetch } from '@angular/common/http';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDYLx8QuKh_6STW_S1veFOYiplRgbXJ4S8',
  authDomain: 'ppw-proyecto-08-e2140.firebaseapp.com',
  projectId: 'ppw-proyecto-08-e2140',
  storageBucket: 'ppw-proyecto-08-e2140.appspot.com',
  messagingSenderId: '527511979348',
  appId: '1:527511979348:web:e88f3f7f69c7378cbbb4c1',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    provideHttpClient(withFetch()),

    provideFirebaseApp(() => initializeApp(firebaseConfig)),

    provideAuth(() => getAuth()),

    provideFirestore(() => getFirestore()),
  ],
};