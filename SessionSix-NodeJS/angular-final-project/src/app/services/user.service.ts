import { User } from './../models/user';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class UserService {

    headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>("http://localhost:5001/users")
    }

    getUserById(id: String): Observable<User> {
        return this.http.get<User>("http://localhost:5001/users/" + id);
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>("http://localhost:5001/users", user, { headers: this.headers });
    }

    deleteUser(id: String): Observable<User> {
        return this.http.delete<User>("http://localhost:5001/users/" + id);
    }
}