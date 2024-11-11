import { Component } from '@angular/core';
import { PostService } from '../../../lib/post';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Post } from '../../model/post';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  // query = '';
  query:string;
  post:Post[] = [];

  constructor(private svcPost: PostService, private router: Router, private route: ActivatedRoute){}
  
  ngOnInit(){
    this.query = this.route.snapshot.paramMap.get('query')!;
    // let query = sessionStorage.getItem('searchKey');
    // if(query) this.query = query;
    // this.svcPost.searchPosts(this.query).then((res:any)=>{
    //   this.post = res;
    //   // console.log('res')
    //   // console.log(res)
    // });
    this.result();
    // console.log(this.post)
  }

  result() {
    // this.svcPost.search(this.query).subscribe((res)=>{
    //   console.log(res);
    // },(err) => {
    //   console.error(err);
    //   alert('Oops, ada masalah dikit kak');
    // });
    this.svcPost.searchPosts(this.query).then((res:any) => {
      this.post = res;
      console.log(res);
    },(err) => {
      console.error(err);
      alert('Oops, ada masalah dikit kak')
    });
  }

  search(event:any){
    const query = event.target.value.trim();
    if(!query) return alert('Cari apa cokk');
    if(query === this.query) return;
    this.query = query;
    this.result();
  }

  buat(){}
}
