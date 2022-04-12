import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  // displaying goals in Array

  goals: Goal[] = [
    new Goal(
      1,
      'watching finding Nemo',
      'finding it on Netflix',
      new Date(2022, 3, 12)
    ),
    new Goal(2, 'coding Angular', 'reading on Canva', new Date(2022, 3, 11)),
    new Goal(3, 'working in pairs', 'meeting online', new Date(2022, 3, 15)),
    new Goal(
      4,
      'It is easier as it seems',
      "this is William's Mantra",
      new Date(2022, 3, 9)
    ),
    new Goal(5, 'to solve the blockers', 'as a group', new Date(2022, 3, 10)),
  ];

  toggleDetails(index: number) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.goals[index].name}?`
      );

      if (toDelete) {
        this.goals.splice(index, 1);
      }
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
