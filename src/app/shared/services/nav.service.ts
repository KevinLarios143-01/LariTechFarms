import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

// Menu
export interface Menu {
	headTitle?: string,
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeClass?:string;
	badgeValue?: string;
	active?: boolean;
	selected?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService implements OnDestroy {

	private readonly unsubscriber: Subject<any> = new Subject();
	public  screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

	// Search Box
	public search: boolean = false;


	// Collapse Sidebar
	public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;


	constructor(private readonly router: Router) {
		this.setScreenWidth(window.innerWidth);
		fromEvent(window, 'resize').pipe(
			debounceTime(1000),
			takeUntil(this.unsubscriber)
		).subscribe((evt: any) => {
			this.setScreenWidth(evt.target.innerWidth);
			if (evt.target.innerWidth < 991) {
				this.collapseSidebar = true;
			}
		});
		if(window.innerWidth < 991) { // Detect Route change sidebar close
			this.router.events.subscribe(() => {
				this.collapseSidebar = true;
			});
		}
	}

	ngOnDestroy() {
		this.unsubscriber.next(true);
		this.unsubscriber.complete();
	}

	private setScreenWidth(width: number): void {
		this.screenWidth.next(width);
	}

	MENUITEMS: Menu[] = [
		{
			headTitle: 'DASHBOARDS'
		},
		{
			title: 'Dashboards', icon: 'home', type:'sub', active: true, selected: false, children:[
				{
					title: 'HR Dashboard', type: 'sub', badgeType: 'success', badgeValue: '2', active: false, selected: false, children: [
						{ path: '/hr-dashboard/dashboard', title: 'Dashboard', type: 'link' , selected: false},
						{ path: '/hr-dashboard/department', title: 'Department', type: 'link' , selected: false},
						{
							title: 'Employess', type: 'sub', active: false, selected: false, children: [
								{ path: '/hr-dashboard/employees/employee-list', title: 'Employee List', type: 'link' , selected: false},
								{ path: '/hr-dashboard/employees/view-employee', title: 'View Employee', type: 'link' , selected: false},
								{ path: '/hr-dashboard/employees/add-employee', title: 'Add Employee', type: 'link' , selected: false},
							]
						},
						{
							title: 'Attendance', type: 'sub', active: false, selected: false, children: [
								{ path: '/hr-dashboard/attendance/attendence-list', title: 'Attendence List', type: 'link' , selected: false},
								{ path: '/hr-dashboard/attendance/attendence-by-user', title: 'Attendence By User', type: 'link' , selected: false},
								{ path: '/hr-dashboard/attendance/attendence-view', title: 'Attendence View', type: 'link' , selected: false},
								{ path: '/hr-dashboard/attendance/overview-calendar', title: 'Overview Calendar', type: 'link' , selected: false},
								{ path: '/hr-dashboard/attendance/attendence-mark', title: 'Attendence Mark', type: 'link' , selected: false},
								{ path: '/hr-dashboard/attendance/leave-settings', title: 'Leave Settings', type: 'link' , selected: false},
								{ path: '/hr-dashboard/attendance/leave-applications', title: 'Leave Applications', type: 'link' , selected: false},
								{ path: '/hr-dashboard/attendance/recent-leaves', title: 'Recent Leaves', type: 'link' , selected: false},
							]
						},
						{ path: '/hr-dashboard/awards', title: 'Awards', type: 'link' , selected: false},
						{ path: '/hr-dashboard/holidays', title: 'Holidays', type: 'link' , selected: false},
						{ path: '/hr-dashboard/notice-board', title: 'Notice Board', type: 'link' , selected: false},
						{ path: '/hr-dashboard/expenses', title: 'Expenses', type: 'link' , selected: false},
						{
							title: 'payroll', type: 'sub', active: false, selected: false, children: [
								{ path: '/hr-dashboard/payroll/employee-salary', title: 'Employee Salary', type: 'link' , selected: false},
								{ path: '/hr-dashboard/payroll/add-payroll', title: 'Add Payroll', type: 'link' , selected: false},
								{ path: '/hr-dashboard/payroll/edit-payroll', title: 'Edit payroll', type: 'link' , selected: false},
							]
						},
						{ path: '/hr-dashboard/events', title: 'Events', type: 'link' , selected: false},
						{ path: '/hr-dashboard/settings', title: 'Settings', type: 'link' , selected: false},
					]
				},
				{
					title: 'Employee Dashboard', type: 'sub', badgeType: 'success', badgeValue: '2', active: false, selected: false, children: [
						{ path: '/employee-dashboard/dashboard', title: 'Dashboard', type: 'link' , selected: false},
						{ path: '/employee-dashboard/attendance', title: 'Attendance', type: 'link' , selected: false},
						{ path: '/employee-dashboard/apply-leaves', title: 'Apply Leaves', type: 'link' , selected: false},
						{ path: '/employee-dashboard/my-leaves', title: 'My Leaves', type: 'link' , selected: false},
						{ path: '/employee-dashboard/payslips', title: 'Payslips', type: 'link' , selected: false},
						{ path: '/employee-dashboard/expenses', title: 'Expenses', type: 'link' , selected: false},
					]
				},
				{
					title: 'Task Dashboard', type: 'sub', badgeType: 'success', badgeValue: '2', selected: false, active: false, children: [
						{ path: '/task-dashboard/dashboard', title: 'Dashboard', type: 'link' , selected: false},
						{ path: '/task-dashboard/task-list', title: 'Task List', type: 'link' , selected: false},
						{ path: '/task-dashboard/running-tasks', title: 'Running Tasks', type: 'link' , selected: false},
						{ path: '/task-dashboard/onhold-tasks', title: 'OnHold Tasks', type: 'link' , selected: false},
						{ path: '/task-dashboard/completed-tasks', title: 'Completed Tasks', type: 'link' , selected: false},
						{ path: '/task-dashboard/view-tasks', title: 'View Tasks', type: 'link' , selected: false},
						{ path: '/task-dashboard/overview-calendar', title: 'Overview Calendar', type: 'link' , selected: false},
						{ path: '/task-dashboard/task-board', title: 'Task Board', type: 'link' , selected: false},
						{ path: '/task-dashboard/new-task', title: 'New Tasks', type: 'link' , selected: false},
						{ path: '/task-dashboard/user-profile', title: 'User Profile', type: 'link' , selected: false},
					]
				},
				{
					title: 'Project Dashboard', type: 'sub', badgeType: 'success', badgeValue: '2', selected: false, active: false, children: [
						{ path: '/project-dashboard/dashboard', title: 'Dashboard', type: 'link' , selected: false},
						{ path: '/project-dashboard/project-list', title: 'Project List', type: 'link' , selected: false},
						{ path: '/project-dashboard/view-project', title: 'View Project', type: 'link' , selected: false},
						{ path: '/project-dashboard/overview-calendar', title: 'Overview Calendar', type: 'link' , selected: false},
						{ path: '/project-dashboard/new-project', title: 'New Project', type: 'link' , selected: false},
					]
				},
				{
					title: 'Client Dashboard', type: 'sub', badgeType: 'success', badgeValue: '2', selected: false, active: false, children: [
						{ path: '/client-dashboard/dashboard', title: 'Dashboard', type: 'link' , selected: false},
						{ path: '/client-dashboard/client-list', title: 'Client List', type: 'link' , selected: false},
						{ path: '/client-dashboard/view-client', title: 'View Client', type: 'link' , selected: false},
						{ path: '/client-dashboard/new-client', title: 'New Client', type: 'link' , selected: false},
						{ path: '/client-dashboard/user-profile', title: 'User Profile', type: 'link' , selected: false},
					]
				},
				{
					title: 'Job Dashboard', type: 'sub', badgeType: 'success', badgeValue: '2', selected: false, active: false, children: [
						{ path: '/job-dashboard/dashboard', title: 'Dashboard', type: 'link' , selected: false},
						{ path: '/job-dashboard/job-lists', title: 'Job Lists', type: 'link' , selected: false},
						{ path: '/job-dashboard/job-view', title: 'Job View', type: 'link' , selected: false},
						{ path: '/job-dashboard/job-applications', title: 'Job Applications', type: 'link' , selected: false},
						{ path: '/job-dashboard/apply-job', title: 'Apply Job', type: 'link' , selected: false},
						{ path: '/job-dashboard/new-job', title: 'New Job', type: 'link' , selected: false},
						{ path: '/job-dashboard/user-profile', title: 'User Profile', type: 'link' , selected: false},
					]
				},
				{
					title: 'Super Admin', type: 'sub', active: false, selected: false, children: [
						{ path: '/super-admin/dashboard', title: 'Dashboard', type: 'link' , selected: false},
						{ path: '/super-admin/companies', title: 'Companies', type: 'link' , selected: false},
						{ path: '/super-admin/subscription-plans', title: 'Subscription Plans', type: 'link' , selected: false},
						{ path: '/super-admin/invoices', title: 'Invoices', type: 'link' , selected: false},
						{ path: '/super-admin/super-admins', title: 'Super Admins', type: 'link' , selected: false},
						{ path: '/super-admin/settings', title: 'Settings', type: 'link' , selected: false},
						{ path: '/super-admin/role-access', title: 'Role Access', type: 'link' , selected: false},
					]
				}
			]
		},
		{
			title: 'Support System', icon: 'headphones', type: 'sub', badgeType: 'success', badgeValue: '2', selected: false, active: false, children: [
				{
					title: 'Landing Pages', type: 'sub', active: false, selected: false, children: [
						{ path: '/support-system/landing-pages/landing-page', title: 'Landing Page', type: 'link' , selected: false},
						{ path: '/support-system/landing-pages/knowledge-page', title: 'Knowledge Page', type: 'link' , selected: false},
						{ path: '/support-system/landing-pages/knowledge-view', title: 'Knowledge View', type: 'link' , selected: false},
						{ path: '/support-system/landing-pages/support-contact', title: 'Support Contact', type: 'link' , selected: false},
						{ path: '/support-system/landing-pages/support-open-ticket', title: 'Support Open Ticket', type: 'link' , selected: false},
					]
				},
				{
					title: 'User Pages', type: 'sub', active: false, selected: false, children: [
						{ path: '/support-system/user-pages/dashboard', title: 'Dashboard', type: 'link' , selected: false},
						{ path: '/support-system/user-pages/profile', title: 'Profile', type: 'link' , selected: false},
						{
							title: 'Tickets', type: 'sub', active: false, selected: false, children: [
								{ path: '/support-system/user-pages/tickets/ticket-list', title: 'Ticket List', type: 'link' , selected: false},
								{ path: '/support-system/user-pages/tickets/active-tickets', title: 'Active Tickets', type: 'link' , selected: false},
								{ path: '/support-system/user-pages/tickets/closed-tickets', title: 'Closed Tickets', type: 'link' , selected: false},
								{ path: '/support-system/user-pages/tickets/create-tickets', title: 'Create Ticket', type: 'link' , selected: false},
								{ path: '/support-system/user-pages/tickets/view-ticket', title: 'View Ticket', type: 'link' , selected: false},
							]
						},
					]
				},
				{
					title: 'Admin', type: 'sub', active: false, selected: false, children: [
						{ path: '/support-system/admin/dashboard', title: 'Dashboard', type: 'link' , selected: false},
						{ path: '/support-system/admin/edit-profile', title: 'Edit Profile', type: 'link' , selected: false},
						{
							title: 'Tickets', type: 'sub', active: false, selected: false, children: [
								{ path: '/support-system/admin/tickets/ticket-list', title: 'Ticket List', type: 'link' , selected: false},
								{ path: '/support-system/admin/tickets/active-tickets', title: 'Active Tickets', type: 'link' , selected: false},
								{ path: '/support-system/admin/tickets/closed-tickets', title: 'Closed Tickets', type: 'link' , selected: false},
								{ path: '/support-system/admin/tickets/new-tickets', title: 'New Ticket', type: 'link' , selected: false},
								{ path: '/support-system/admin/tickets/view-ticket', title: 'View Ticket', type: 'link' , selected: false},
							]
						},
						{ path: '/support-system/admin/customers', title: 'Customers', type: 'link' , selected: false},
						{ path: '/support-system/admin/categories', title: 'Categories', type: 'link' , selected: false},
						{ path: '/support-system/admin/articles', title: 'Articles', type: 'link' , selected: false},
					]
				},
				{
					title: 'Agent', type: 'sub', active: false, selected: false, children: [
						{ path: '/support-system/agent/dashboard', title: 'Dashboard', type: 'link' , selected: false},
						{
							title: 'Tickets', type: 'sub', active: false, selected: false, children: [
								{ path: '/support-system/agent/tickets/ticket-list', title: 'Ticket List', type: 'link' , selected: false},
								{ path: '/support-system/agent/tickets/active-tickets', title: 'Active Tickets', type: 'link' , selected: false},
								{ path: '/support-system/agent/tickets/closed-tickets', title: 'Closed Tickets', type: 'link' , selected: false},
								{ path: '/support-system/agent/tickets/view-ticket', title: 'View Ticket', type: 'link' , selected: false},
							]
						},
						{ path: '/support-system/agent/assigned-categories', title: 'Assigned Categoreies', type: 'link' , selected: false},
					]
				},
			]
		},
		{
			path: '/chat', title: 'Chat', icon: 'message-square', type: 'link', bookmark: true, selected: false
		},
		{
			title: 'Admin', icon: 'airplay', type: 'sub', active: false, selected: false, children: [
				{ path: '/admin/general-settings', title: 'General Settings', type: 'link' , selected: false},
				{ path: '/admin/api-settings', title: 'Api Settings', type: 'link' , selected: false},
				{ path: '/admin/role-access', title: 'Role Access', type: 'link' , selected: false},
			]
		},

		{
			headTitle: 'APPS'
		},
		{
			title: 'Apps', icon: 'codepen', type: 'sub', active: false, selected: false, children: [
				{
					title: 'Forms', type: 'sub', active: false, selected: false, children: [
						{ path: '/forms/form-elements', title: 'Form Elements', type: 'link' , selected: false},
						{ path: '/forms/advanced-forms', title: 'Advanced Elements', type: 'link' , selected: false},
						{ path: '/forms/form-wizard', title: 'Form Wizard', type: 'link' , selected: false},
						{ path: '/forms/form-editor', title: 'Form Editor', type: 'link' , selected: false},
						{ path: '/forms/form-element-sizes', title: 'Form Element-sizes', type: 'link' , selected: false},
						{ path: '/forms/form-treeview', title: 'Form Treeview', type: 'link' , selected: false},
					]
				},
				{
					title: 'Charts', type: 'sub', active: false, selected: false, children: [
						{ path: '/charts/apex-charts', title: 'Apex Charts', type: 'link' , selected: false},
						{ path: '/charts/echarts', title: 'Echarts', type: 'link' , selected: false},
						{ path: '/charts/chartist', title: 'Chartist', type: 'link' , selected: false},
						{ path: '/charts/chartjs', title: 'Chatjs', type: 'link' , selected: false},
					]
				},
				{
					title: 'Widgets', type: 'sub', active: false, selected: false, children: [
						{ path: '/widgets/widgets', title: 'Widgets', type: 'link' , selected: false},
						{ path: '/widgets/chart-widgets', title: 'Chart Widgets', type: 'link' , selected: false},
					]
				},
				{
					title: 'Maps', type: 'sub', active: false, selected: false, children: [
						{ path: '/maps/leaflet', title: 'Leaflet', type: 'link' , selected: false}
					]
				},
				{
					title: 'Tables', type: 'sub', active: false, selected: false, children: [
						{ path: '/tables/default-table', title: 'Default Table', type: 'link' , selected: false},
						{ path: '/tables/data-table', title: 'Data Table', type: 'link' , selected: false},
					]
				},
				{
					title: 'Icons', type: 'sub', active: false, selected: false, children: [
						{ path: '/icons/font-awsome', title: 'Font Awsome', type: 'link' , selected: false},
						{ path: '/icons/material-design-icons', title: 'Material Design Icons', type: 'link' , selected: false},
						{ path: '/icons/simple-line', title: 'Simple Line Icons', type: 'link' , selected: false},
						{ path: '/icons/feather-icons', title: 'Feather Icons', type: 'link' , selected: false},
						{ path: '/icons/ionic-icons', title: 'Ionic Icons', type: 'link' , selected: false},
						{ path: '/icons/flag-icons', title: 'Flag Icons', type: 'link' , selected: false},
						{ path: '/icons/pe7-icons', title: 'Pe7 Icons', type: 'link' , selected: false},
						{ path: '/icons/themify-icons', title: 'Themify Icons', type: 'link' , selected: false},
						{ path: '/icons/typicons', title: 'Typicons Icons', type: 'link' , selected: false},
						{ path: '/icons/weather-icons', title: 'Weather Icons', type: 'link' , selected: false},
						{ path: '/icons/material-icons', title: 'Material Icons', type: 'link' , selected: false},
					]
				},
			]
		},
		{
			title: 'Components', icon: 'server', type: 'sub', active: false, selected: false, children: [
				{
					title: 'Chat', type: 'sub', active: false, selected: false, children: [
						{ path: '/components/chat/chat01', title: 'Chat 01', type: 'link' , selected: false},
						{ path: '/components/chat/chat02', title: 'Chat 02', type: 'link' , selected: false},
						{ path: '/components/chat/chat03', title: 'Chat 03', type: 'link' , selected: false},
					]
				},
				{
					title: 'Contact', type: 'sub', active: false, selected: false, children: [
						{ path: '/components/contact/contact-list01', title: 'Contact List 01', type: 'link' , selected: false},
						{ path: '/components/contact/contact-list02', title: 'Contact List 02', type: 'link' , selected: false},
					]
				},
				{
					title: 'File Manager', type: 'sub', active: false, selected: false, children: [
						{ path: '/components/file-manager/file-manager01', title: 'File Manager 01', type: 'link' , selected: false},
						{ path: '/components/file-manager/file-manager02', title: 'File Manager 02', type: 'link' , selected: false},
						{ path: '/components/file-manager/file-details', title: 'File Details', type: 'link' , selected: false},
						{ path: '/components/file-manager/file-attachments', title: 'File Attachments', type: 'link' , selected: false},
					]
				},
				{
					title: 'Todo List', type: 'sub', active: false, selected: false, children: [
						{ path: '/components/todo-list/todo-list01', title: 'Todo List 01', type: 'link' , selected: false},
						{ path: '/components/todo-list/todo-list02', title: 'Todo List 02', type: 'link' , selected: false},
						{ path: '/components/todo-list/todo-list03', title: 'Todo List 03', type: 'link' , selected: false},
					]
				},
				{
					title: 'User List', type: 'sub', active: false, selected: false, children: [
						{ path: '/components/user-list/user-list01', title: 'User List 01', type: 'link' , selected: false},
						{ path: '/components/user-list/user-list02', title: 'User List 02', type: 'link' , selected: false},
						{ path: '/components/user-list/user-list03', title: 'User List 03', type: 'link' , selected: false},
						{ path: '/components/user-list/user-list04', title: 'User List 04', type: 'link' , selected: false},
					]
				},
				{ path: '/components/calendar', title: 'Calendar', type: 'link' , selected: false},
				{ path: '/components/dragula-card', title: 'Dragula Card', type: 'link' , selected: false},
				{ path: '/components/image-comparsion', title: 'Image Comparsion', type: 'link' , selected: false},
				{ path: '/components/image-crop', title: 'Image Crop', type: 'link' , selected: false},
				{ path: '/components/page-sessiontimeout', title: 'Page SessionTimeout', type: 'link' , selected: false},
				{ path: '/components/notifications', title: 'Notifications', type: 'link' , selected: false},
				{ path: '/components/sweet-alerts', title: 'Sweet Alerts', type: 'link' , selected: false},
				{ path: '/components/range-slider', title: 'Range Slider', type: 'link' , selected: false},
				{ path: '/components/counters', title: 'Counters', type: 'link' , selected: false},
				{ path: '/components/loaders', title: 'Loaders', type: 'link' , selected: false},
				{ path: '/components/time-line', title: 'Time Line', type: 'link' , selected: false},
				{ path: '/components/rating', title: 'Rating', type: 'link' , selected: false},
			]
		},
		{
			title: 'Elements', icon: 'layers', type: 'sub', active: false, selected: false, children: [
				{ path: '/elements/accordion', title: 'Accordion', type: 'link' , selected: false},
				{ path: '/elements/alerts', title: 'Alerts', type: 'link' , selected: false},
				{ path: '/elements/avatars', title: 'Avatars', type: 'link' , selected: false},
				{ path: '/elements/badges', title: 'Badges', type: 'link' , selected: false},
				{ path: '/elements/breadcrumb', title: 'Breadcrumb', type: 'link' , selected: false},
				{ path: '/elements/buttons', title: 'Buttons', type: 'link' , selected: false},
				{ path: '/elements/cards', title: 'Cards', type: 'link' , selected: false},
				{ path: '/elements/card-images', title: 'Card Images', type: 'link' , selected: false},
				{ path: '/elements/carousel', title: 'Carousel', type: 'link' , selected: false},
				{ path: '/elements/dropdown', title: 'Dropdown', type: 'link' , selected: false},
				{ path: '/elements/footers', title: 'Footers', type: 'link' , selected: false},
				{ path: '/elements/headers', title: 'Headers', type: 'link' , selected: false},
				{ path: '/elements/lists-listgroup', title: 'Lists & List Group', type: 'link' , selected: false},
				{ path: '/elements/media-object', title: 'Media Object', type: 'link' , selected: false},
				{ path: '/elements/modal', title: 'Modal', type: 'link' , selected: false},
				{ path: '/elements/navigation', title: 'Navigation', type: 'link' , selected: false},
				{ path: '/elements/pagination', title: 'Pagination', type: 'link' , selected: false},
				{ path: '/elements/panel', title: 'Panel', type: 'link' , selected: false},
				{ path: '/elements/popover', title: 'Popover', type: 'link' , selected: false},
				{ path: '/elements/progress', title: 'Progress', type: 'link' , selected: false},
				{ path: '/elements/tabs', title: 'Tabs', type: 'link' , selected: false},
				{ path: '/elements/tags', title: 'Tags', type: 'link' , selected: false},
				{ path: '/elements/tooltips', title: 'Tooltips', type: 'link' , selected: false},
			]
		},


		{
			headTitle: 'PAGES'
		},
		{
			title: 'Pages', icon: 'copy', type: 'sub', badgeType: 'success', badgeValue: '2', active: false, selected: false, children: [
				{
					title: 'Profile', type: 'sub', active: false, selected: false, children: [
						{ path: '/pages/profile/profile01', title: 'Profile 01', type: 'link' , selected: false},
						{ path: '/pages/profile/profile02', title: 'Profile 02 ', type: 'link' , selected: false},
						{ path: '/pages/profile/profile03', title: 'Profile 03', type: 'link' , selected: false},
					]
				},
				{ path: '/pages/edit-profile', title: 'Edit Profile', type: 'link' , selected: false},
				{
					title: 'Email', type: 'sub', active: false, selected: false, children: [
						{ path: '/pages/email/email-compose', title: 'Email Compose', type: 'link' , selected: false},
						{ path: '/pages/email/email-inbox', title: 'Email Inbox', type: 'link' , selected: false},
						{ path: '/pages/email/email-read', title: 'Email Read', type: 'link' , selected: false},
					]
				},
				{
					title: 'Invoice', type: 'sub', active: false, selected: false, children: [
						{ path: '/pages/invoice/invoice-list', title: 'Invoice List', type: 'link' , selected: false},
						{ path: '/pages/invoice/invoice01', title: 'Invoice 01', type: 'link' , selected: false},
						{ path: '/pages/invoice/invoice02', title: 'Invoice 02', type: 'link' , selected: false},
						{ path: '/pages/invoice/invoice03', title: 'Invoice 03', type: 'link' , selected: false},
						{ path: '/pages/invoice/add-invoice', title: 'Add Invoice', type: 'link' , selected: false},
						{ path: '/pages/invoice/edit-invoice', title: 'Edit Invoice', type: 'link' , selected: false},
					]
				},
				{
					title: 'Blog', type: 'sub', active: false, selected: false, children: [
						{ path: '/pages/blog/blog01', title: 'Blog 01', type: 'link' , selected: false},
						{ path: '/pages/blog/blog02', title: 'Blog 02', type: 'link' , selected: false},
						{ path: '/pages/blog/blog03', title: 'Blog 03', type: 'link' , selected: false},
						{ path: '/pages/blog/blog-styles', title: 'Blog Styles', type: 'link' , selected: false},
					]
				},
				{
					title: 'Pricing', type: 'sub', active: false, selected: false, children: [
						{ path: '/pages/pricing/pricing01', title: 'pricing 01', type: 'link' , selected: false},
						{ path: '/pages/pricing/pricing02', title: 'pricing 02', type: 'link' , selected: false},
						{ path: '/pages/pricing/pricing03', title: 'pricing 03', type: 'link' , selected: false},
					]
				},
				{ path: '/pages/gallery', title: 'Gallery', type: 'link' , selected: false},
				{ path: '/pages/faqs', title: 'FAQS', type: 'link' , selected: false},
				{ path: '/pages/terms', title: 'Terms', type: 'link' , selected: false},
				{ path: '/pages/empty-pages', title: 'Empty Pages', type: 'link' , selected: false},
				{ path: '/pages/search', title: 'Search', type: 'link' , selected: false},
				{ path: '/pages/about', title: 'About', type: 'link' , selected: false},
				{ path: '/pages/notify-list', title: 'Notify-list', type: 'link' , selected: false},
				{ path: '/pages/settings', title: 'Settings', type: 'link' , selected: false},
				{
					title: 'Utils', type: 'sub', badgeType: 'success', badgeValue: '2', active: false, selected: false, children: [
						{ path: '/utils/colors', title: 'Colors', type: 'link' , selected: false},
						{ path: '/utils/flex-items', title: 'Flex Items', type: 'link' , selected: false},
						{ path: '/utils/height', title: 'Height', type: 'link' , selected: false},
						{ path: '/utils/border', title: 'Border', type: 'link' , selected: false},
						{ path: '/utils/display', title: 'Display', type: 'link' , selected: false},
						{ path: '/utils/margin', title: 'Margin', type: 'link' , selected: false},
						{ path: '/utils/padding', title: 'Padding', type: 'link' , selected: false},
						{ path: '/utils/typhography', title: 'Typhography', type: 'link' , selected: false},
						{ path: '/utils/width', title: 'Width', type: 'link' , selected: false},
					]
				},
			]
		},
		{
			title: 'Submenus', icon: 'sliders', type: 'sub', active: false, selected: false, children: [
				{ title: 'level-1', type: 'empty' , selected: false},
				{ title: 'level2', type: 'sub', active:false, selected: false, children: [
					{ title: 'level-2.1', type: 'empty' , selected: false},
					{ title: 'level-2.2', type: 'empty' , selected: false},
					{ title: 'level2.3', type: 'sub', active:false, selected: false, children:[
						{ title: 'level-2.3.1', type: 'empty' , selected: false},
						{ title: 'level-2.3.2', type: 'empty' , selected: false},
					]  },
				]  },
			]
		},
		{
			title: 'Account', icon: 'lock', type: 'sub', badgeType: 'success', badgeValue: '2', active: false, selected: false, children: [
				{
					title: 'Login', type: 'sub', active: false, selected: false, children: [
						{ path: '/account/login/login01', title: 'Login 01', type: 'link' , selected: false},
						{ path: '/account/login/login02', title: 'Login 02 ', type: 'link' , selected: false},
						{ path: '/account/login/login03', title: 'Login 03', type: 'link' , selected: false},
					]
				},
				{
					title: 'Register', type: 'sub', active: false, selected: false, children: [
						{ path: '/account/register/register01', title: 'Register 01', type: 'link' , selected: false},
						{ path: '/account/register/register02', title: 'Register 02 ', type: 'link' , selected: false},
						{ path: '/account/register/register03', title: 'Register 03', type: 'link' , selected: false},
					]
				},
				{
					title: 'Forget Password', type: 'sub', active: false, selected: false, children: [
						{ path: '/account/forget-password/forget-password01', title: 'Forget Password 01', type: 'link' , selected: false},
						{ path: '/account/forget-password/forget-password02', title: 'Forget Password 02 ', type: 'link' , selected: false},
						{ path: '/account/forget-password/forget-password03', title: 'Forget Password 03', type: 'link' , selected: false},
					]
				},
				{
					title: 'Reset Password', type: 'sub', active: false, selected: false, children: [
						{ path: '/account/reset-password/reset-password01', title: 'Reset Password 01', type: 'link' , selected: false},
						{ path: '/account/reset-password/reset-password02', title: 'Reset Password 02 ', type: 'link' , selected: false},
						{ path: '/account/reset-password/reset-password03', title: 'Reset Password 03', type: 'link' , selected: false},
					]
				},
				{
					title: 'Lock Screen', type: 'sub', active: false, selected: false, children: [
						{ path: '/account/lock-screen/lock-screen01', title: 'Lock Screen 01', type: 'link' , selected: false},
						{ path: '/account/lock-screen/lock-screen02', title: 'Lock Screen 02 ', type: 'link' , selected: false},
						{ path: '/account/lock-screen/lock-screen03', title: 'Lock Screen 03', type: 'link' , selected: false},
					]
				},
				{ path: '/account/under-construction', title: 'Under Construction', type: 'link' , selected: false},
				{ path: '/account/coming-soon', title: 'Comming Soon', type: 'link' , selected: false},
				{
					title: 'Alert Messages', type: 'sub', badgeType: 'success', badgeValue: '2', active: false, selected: false, children: [
						{ path: '/alert/success-message', title: 'Success Message', type: 'link' , selected: false},
						{ path: '/alert/warning-message', title: 'Warning Message', type: 'link' , selected: false},
						{ path: '/alert/danger-message', title: 'Danger Messages', type: 'link' , selected: false},
					]
				},
				{
					title: 'error-pages', type: 'sub', badgeType: 'success', badgeValue: '2', active: false, selected: false, children: [
						{ path: '/error-page/error400', title: '400', type: 'link' , selected: false},
						{ path: '/error-page/error401', title: '401', type: 'link' , selected: false},
						{ path: '/error-page/error403', title: '403', type: 'link' , selected: false},
						{ path: '/error-page/error404', title: '404', type: 'link' , selected: false},
						{ path: '/error-page/error500', title: '500', type: 'link' , selected: false},
						{ path: '/error-page/error503', title: '503', type: 'link' , selected: false},
					]
				},
			]
		},
		{
			title: 'Ecommerce', icon: 'shopping-cart', type: 'sub', badgeType: 'success', badgeValue: '2', active: false, selected: false, children: [
				{ path: '/ecommerce/products', title: 'Products', type: 'link' , selected: false},
				{ path: '/ecommerce/products-details/1', title: 'Products Details', type: 'link' , selected: false},
				{ path: '/ecommerce/shopping-cart', title: 'Shopping Cart', type: 'link' , selected: false},
			]
		},

	];


	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

}
