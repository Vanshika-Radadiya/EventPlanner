import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserdashComponent } from './userdash/userdash.component';
import { SearchListComponent } from './search-list/search-list.component';
import { ArtistsComponent } from './artists/artists.component';
import { CatererComponent } from './caterer/caterer.component';
import { DisplayEventComponent } from './display-event/display-event.component';
import { DisplayCatererComponent } from './display-caterer/display-caterer.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { DisplayArtistComponent } from './display-artist/display-artist.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route (Home)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userdash', component: UserdashComponent },
  { path: 'artist/:type', component: ArtistsComponent },
  { path: 'caterer', component: CatererComponent },
  { path: 'displayEvent/:event_id', component: DisplayEventComponent },
  { path: 'displayCaterer/:menu_id', component: DisplayCatererComponent },
  { path: 'displayArtist/:artist_id', component: DisplayArtistComponent },
  { path: 'searchEvent/:title', component: SearchListComponent},
  { path: 'chatbot', component: ChatbotComponent},
];

export const appRouter = provideRouter(routes);

