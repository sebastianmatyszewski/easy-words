import { Component, OnInit } from '@angular/core';
import { WordType } from 'src/app/data/models';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  // providers: [WordsService]
})
export class QuestionComponent implements OnInit{

  word: WordType | null = null;

  constructor(private wordsService: WordsService){

  }

  ngOnInit(): void {
    this.fetchWord();
  }

  addToNouns(word: WordType) {
    this.wordsService.addNoun(word);
    this.fetchWord();
  }

  addToVerbs(word: WordType) {
    this.wordsService.addVerbs(word);
    this.fetchWord();
  }

  check(): void {
    this.wordsService.check();
  }

  private fetchWord():void {
    console.log("fff")
    const words = this.wordsService.getWords();

    if (words.length > 0) {
      this.word = words.shift()!;
    } else{
      this.word = null;
    }
  }
}
