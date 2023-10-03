import { ChangeDetectionStrategy, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatTableModule, MatCheckboxModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HttpClientModule, HttpClient]
})
export class UserListComponent {

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.apiService.fetchUsers()
    console.log(this.users$)
  }

public users$ = this.apiService.users$;
displayedColumns: string[] = ['select', 'name', 'email', 'phone', 'role', 'create_at', 'update_at', 'status', 'is_ecp'];

public userForm = this.fb.group({
  id: [null, Validators.required],
  name: ['', [Validators.required, Validators.maxLength(30)]],
  email: ['', [Validators.required, Validators.email]],
  phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
  create_at: [null, Validators.required],
  update_at: [null, Validators.required]
});


}
