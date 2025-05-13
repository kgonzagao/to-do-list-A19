import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  private taskService = inject(TaskService);

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onTaskCreated(): void {
    this.loadTasks();
  }

  onTaskDeleted(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
