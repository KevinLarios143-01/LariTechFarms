import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

import { Router } from '@angular/router';
// Menu
export interface Menu {
	headTitle?: string;
	headTitle2?: string;
	path?: string;
	dirchange?: boolean;
	title?: string;
	icon?: string;
	type?: string;
	badgeValue?: string;
	badgeClass?: string;
	active?: boolean;
	selected?: boolean;
	bookmark?: boolean;
	children?: Menu[];
	Menusub?: boolean;
	target?: boolean;
	menutype?: string;
	badgeType?: string
}

@Injectable({
	providedIn: 'root',
})
export class NavService implements OnDestroy {
	private unsubscriber: Subject<any> = new Subject();
	public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
		window.innerWidth
	);

	// Search Box
	public search = false;

	// Language
	public language = false;

	// Mega Menu
	public megaMenu = false;
	public levelMenu = false;
	public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

	// Collapse Sidebar
	public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

	// For Horizontal Layout Mobile
	public horizontal: boolean = window.innerWidth < 991 ? false : true;

	// Full screen
	public fullScreen = false;
	active: any;

	constructor(private router: Router) {
		this.setScreenWidth(window.innerWidth);
		fromEvent(window, 'resize')
			.pipe(debounceTime(1000), takeUntil(this.unsubscriber))
			.subscribe((evt: any) => {
				this.setScreenWidth(evt.target.innerWidth);
				if (evt.target.innerWidth < 991) {
					this.collapseSidebar = true;
					this.megaMenu = false;
					this.levelMenu = false;
				}
				if (evt.target.innerWidth < 1199) {
					this.megaMenuColapse = true;
				}
			});
		if (window.innerWidth < 991) {
			// Detect Route change sidebar close
			this.router.events.subscribe((event) => {
				this.collapseSidebar = true;
				this.megaMenu = false;
				this.levelMenu = false;
			});
		}
	}

	ngOnDestroy() {
		this.unsubscriber.next;
		this.unsubscriber.complete();
	}

	private setScreenWidth(width: number): void {
		this.screenWidth.next(width);
	}

	MENUITEMS: Menu[] = [
		// Dashboard
		{ headTitle: 'DASHBOARDS' },
		{
			title: 'Dashboards',
			icon: 'home',
			dirchange: false,
			type: 'sub',
			active: false,
			children: [
				{
					title: 'Hr Dashboard',
					dirchange: false,
					type: 'sub',
					active: false,
					selected: false,
					children: [
						{
							title: 'Dashboard',
							dirchange: false,
							type: 'link',
							active: false,
							selected: false,
							path: '/dashboard/hrmdashboards/dashboard',
						},
					
					]
				},
			
			],
		},
	
		{
			title: 'Submenus', icon: 'sliders', type: 'sub', active: false, selected: false, children: [
				{ title: 'level-1', type: 'empty', selected: false },
				{
					title: 'level2', type: 'sub', active: false, selected: false, children: [
						{ title: 'level-2.1', type: 'empty', selected: false },
						{ title: 'level-2.2', type: 'empty', selected: false },
						{
							title: 'level2.3', type: 'sub', active: false, selected: false, children: [
								{ title: 'level-2.3.1', type: 'empty', selected: false },
								{ title: 'level-2.3.2', type: 'empty', selected: false },
							]
						},
					]
				},
			]
		},
		{
			title: 'Account', icon: 'lock', type: 'sub', badgeType: 'success', active: false, selected: false, children: [
			
				{
					title: 'error-pages', type: 'sub', badgeType: 'success', badgeValue: '2', active: false, selected: false, children: [
						{ path: '/error-page/error404', title: '404', type: 'link', selected: false },
						
					]
				},
			]
		},
	 

	];
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
