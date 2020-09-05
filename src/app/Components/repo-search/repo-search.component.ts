import { Component, OnInit } from '@angular/core';
import { SearchGitService } from '../../service/search-git.service';
import { RepositoriesByName } from '../../Model/repositories-by-name';
import { ActivatedRoute } from '@angular/router'; 
import { NumberOfRepos } from '../../Model/number-of-repos'; 


@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {

  reposByName:RepositoriesByName[];
  reponame:string;
  numberOfRepos: NumberOfRepos;

  constructor( private route: ActivatedRoute, private searchGitService: SearchGitService ) {}

  repoSearch(){
    this.reponame = this.route.snapshot.paramMap.get('reponame')
    this.searchGitService.repoByNameRequest(this.reponame).then((response) =>{
      this.reposByName =this.searchGitService.reposByName;
    });
    this.searchGitService.repoByNameNumberRequest(this.reponame).then((response) =>{
      this.numberOfRepos =this.searchGitService.numberOfRepos;
    });
    console.log(this.numberOfRepos)
  }

  ngOnInit(){
    this.repoSearch()
  }

}
