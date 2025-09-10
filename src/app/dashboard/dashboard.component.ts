import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../Shared/navbar/navbar.component';
import { FooterComponent } from '../Shared/footer/footer.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, NavbarComponent, FooterComponent, NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  email: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.email$.subscribe(email => {
      this.email = email;
    });
  }
  logout() {
    localStorage.removeItem('email'); // or clear all if needed
    this.authService.setEmail(null);
    this.router.navigate(['/login']);
  }
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Monthly Donations Chart
  public monthlyDonationsChartData: ChartData<'bar'> = {
    labels: ['Jan-2025', 'Feb-2025', 'Mar-2025'],
    datasets: [
      {
        type: 'bar',
        label: 'Donations',
        data: [75000, 60000, 40000],
        backgroundColor: 'rgba(128, 128, 128, 0.7)',
        barPercentage: 0.6,
        borderRadius: 3,
      },
      // {
      //   type: 'bar',
      //   label: 'Transactions',
      //   data: [120, 100, 80],
      //   borderColor: 'rgba(54, 54, 54, 0.8)',
      //   tension: 0.3,
      //   pointRadius: 4,
      //   pointHoverRadius: 6,
      //   yAxisID: 'y1'
      // }
    ],
  };

  public monthlyDonationsChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Donations ($)',
        },
      },
      y1: {
        beginAtZero: true,
        position: 'right',
        title: {
          display: true,
          text: 'Transactions',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  // Membership Activity Chart
  public membershipActivityChartData: ChartData<'line'> = {
    labels: [
      'Week 1',
      'Week 2',
      'Week 3',
      'Week 4',
      'Week 5',
      'Week 6',
      'Week 7',
      'Week 8',
    ],
    datasets: [
      {
        label: 'New Members',
        data: [5, 15, 10, 30, 20, 60, 40, 80],
        borderColor: 'rgba(128, 128, 128, 0.8)',
        backgroundColor: 'rgba(128, 128, 128, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 3,
        pointHoverRadius: 5,
      },
      {
        label: 'Renewal Rate (%)',
        data: [60, 65, 62, 70, 72, 75, 68, 85],
        borderColor: 'rgba(169, 169, 169, 0.8)',
        backgroundColor: 'rgba(169, 169, 169, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 3,
        pointHoverRadius: 5,
        hidden: true,
      },
    ],
  };

  public membershipActivityChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Donation Categories Chart
  public donationCategoriesChartData: ChartData<'pie'> = {
    labels: [
      'General',
      'Education',
      'Community',
      'Healthcare',
      'Youth Programs',
      'Other',
    ],
    datasets: [
      {
        data: [42500, 18750, 15200, 12800, 11250, 0],
        backgroundColor: [
          'rgba(169, 169, 169, 0.7)',
          'rgba(128, 128, 128, 0.7)',
          'rgba(105, 105, 105, 0.7)',
          'rgba(90, 90, 90, 0.7)',
          'rgba(75, 75, 75, 0.7)',
          'rgba(60, 60, 60, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  public donationCategoriesChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 15,
          padding: 10,
        },
      },
    },
  };
}
