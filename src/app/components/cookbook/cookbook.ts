import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookbook',
  imports: [RouterLink],
  templateUrl: './cookbook.html',
  styleUrls: ['./cookbook.scss', './cookbook-resp.scss']
})
export class Cookbook {}
