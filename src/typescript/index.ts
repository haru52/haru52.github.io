import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import 'bootstrap';
import 'reflect-metadata';
import { container } from 'tsyringe';
import '../assets/stylesheets/index.scss';
import Application from './application';

container.resolve(Application).run();
