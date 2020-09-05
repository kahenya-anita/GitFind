import { Component, OnInit } from '@angular/core';
import { Users } from '../../Model/users';
import { HttpClient } from '@angular/common/http';
import { SearchGitService } from '../../service/search-git.service';
import { Repositories } from '../../Model/repositories';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  repos:Repositories[];
  user:Users;

  constructor(private searchGitService: SearchGitService, private http:HttpClient) {}

  ngOnInit(){
    this.searchGitService.userInfoRequest("kahenya-anita")
    this.user = this.searchGitService.user
    this.searchGitService.userRepoRequest("kahenya-anita")
    this.repos =this.searchGitService.repos
  }


}
