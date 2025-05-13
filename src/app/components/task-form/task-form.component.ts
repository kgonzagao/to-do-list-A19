import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  @Output() taskCreated = new EventEmitter<void>();
  newTask: Omit<Task, 'id'> = {
    title: '',
    description: '',
    completed: false,
  };
  private taskService = inject(TaskService);

  onSubmit(): void {
    this.taskService.createTask(this.newTask).subscribe({
      next: () => {
        this.taskCreated.emit();
        this.resetForm();
      },
      error: (err) => console.error('Error creating task:', err),
    });
  }

  private resetForm(): void {
    this.newTask = {
      title: '',
      description: '',
      completed: false,
    };
  }
}
