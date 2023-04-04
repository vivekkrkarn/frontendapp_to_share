import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {User} from "../../models/user";

@Injectable()
export class UserShareService {
  private user$ = new BehaviorSubject<User>(new User());
  selectedUser$ = this.user$.asObservable();
  constructor() {}

  setSelectedUser(user: User) {
    this.user$.next(user);
  }
}
