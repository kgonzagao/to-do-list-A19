import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input({ required: true }) task!: Task;
  @Output() taskDeleted = new EventEmitter<number>();
  private taskService = inject(TaskService);

  onDelete(): void {
    if (this.task.id) {
      this.taskService.deleteTask(this.task.id).subscribe({
        next: () => this.taskDeleted.emit(this.task.id),
        error: (err) => console.error('Error deleting task:', err),
      });
    }
  }

  onToggleComplete(): void {
    if (this.task.id) {
      const updatedTask = {
        ...this.task,
        completed: !this.task.completed,
      };

      this.taskService.updateTask(this.task.id, updatedTask).subscribe({
        error: (err) => console.error('Error updating task:', err),
      });
    }
  }
}
