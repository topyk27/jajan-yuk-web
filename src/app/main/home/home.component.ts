import { Component, ElementRef, ViewChild } from '@angular/core';
import { PostService } from '../../../lib/post';
import { Router } from '@angular/router';
import { Post } from '../../model/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChild('postList') postListEl: ElementRef;
  allPosts: Post[] = [];
  trendingPosts: Post[] = [];
  postOffset = 0;
  postLimit = 6;
  
  constructor(private svcPost: PostService, private router: Router) {}

  ngOnInit() {
    this.svcPost.getMostViewPosts().then((res: any) => {
      this.trendingPosts = res;
    });
    this.listPost(true,true);
  }

  listPost(next: boolean, first?:boolean) {
    let offset = this.postOffset;
    if (next) {
      if(!first) {
        offset += this.postLimit;
      }
    } else {
      offset -= this.postLimit;
    }
    this.svcPost.getAllPostPerPage(offset, this.postLimit).then((res: any) => {
      if(res.length > 0) {
        this.allPosts = res;
        this.postOffset = offset;
        
        // this.postLimit += 6;
        if(this.postListEl) {
          this.postListEl.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        alert('Sudah diujung kak');
      }
    });
  }

  search(event: any) {
    const query = event.target.value.trim();
    if (!query) return alert('Cari apa cokk');
    this.router.navigate(['main/search', event.target.value.trim()]);
  }

  next() {
    this.listPost(true);
  }

  prev() {
    if (this.postOffset > 0) {
      this.listPost(false);
    } else {
      alert('Sudah diujung kak');
    }
  }

  buat() {
    console.log('buat klik');
  }
}
