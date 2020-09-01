import { Component, OnInit } from '@angular/core';
import { Users } from '../../Model/users';
import { HttpClient } from '@angular/common/http';
import { SearchGitService } from '../../services/search-git';
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
    this.searchGitService.userInfoRequest("lornakamau")
    this.user = this.searchGitService.user
    this.searchGitService.userRepoRequest("lornakamau")
    this.repos =this.searchGitService.repos
  }


}
