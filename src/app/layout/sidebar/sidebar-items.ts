import { RouteInfo } from './sidebar.metadata';
export const ROUTES: RouteInfo[] = [
  // {
  //   path: '',
  //   title: 'MENUITEMS.MAIN.TEXT',
  //   moduleName: '',
  //   iconType: '',
  //   icon: '',
  //   class: '',
  //   groupTitle: true,
  //   badge: '',
  //   badgeClass: '',
  //   role: ['All'],
  //   submenu: [],
  // },

  // Admin Modules

  // {
  //   path: '',
  //   title: 'MENUITEMS.HOME.TEXT',
  //   moduleName: 'dashboard',
  //   iconType: 'material-icons-two-tone',
  //   icon: 'home',
  //   class: 'menu-toggle',
  //   groupTitle: false,
  //   badge: '',
  //   badgeClass: '',
  //   role: ['Admin'],
  //   submenu: [
  //     {
  //       path: '/admin/dashboard/main',
  //       title: 'MENUITEMS.HOME.LIST.DASHBOARD1',
  //       moduleName: 'dashboard',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //   ],
  // },



  // Common Module

  // {
  //   path: '',
  //   title: 'Authentication',
  //   moduleName: 'authentication',
  //   iconType: 'material-icons-two-tone',
  //   icon: 'supervised_user_circle',
  //   class: 'menu-toggle',
  //   groupTitle: false,
  //   badge: '',
  //   badgeClass: '',
  //   role: ['Admin'],
  //   submenu: [
  //     {
  //       path: '/authentication/signin',
  //       title: 'Sign In',
  //       moduleName: 'authentication',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/authentication/signup',
  //       title: 'Sign Up',
  //       moduleName: 'authentication',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/authentication/forgot-password',
  //       title: 'Forgot Password',
  //       moduleName: 'authentication',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/authentication/locked',
  //       title: 'Locked',
  //       moduleName: 'authentication',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/authentication/page404',
  //       title: '404 - Not Found',
  //       moduleName: 'authentication',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/authentication/page500',
  //       title: '500 - Server Error',
  //       moduleName: 'authentication',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //   ],
  // }

  ,
  {
    path: '',
    title: 'Application',
    moduleName: 'admin',
    iconType: 'material-icons-two-tone',
    icon: 'description',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [

      {
        path: '/admin/accessories',
        title: 'Accessories',
        moduleName: 'admin',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      }, {
        path: '/admin/brand',
        title: 'Brand',
        moduleName: 'admin',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      }, {
        path: '/admin/models',
        title: 'Model',
        moduleName: 'admin',
        iconType: 'material-icons-two-tone',
        icon: 'slideshow',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      }, {
        path: '/admin/varients',
        title: 'Varients',
        moduleName: 'admin',
        iconType: '',
        icon: '',
        class: 'ml-sub-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [
          {
            path: '/admin/varients',
            title: 'Save/Update',
            moduleName: 'admin',
            iconType: '',
            icon: '',
            class: 'ml-sub-sub-menu',
            groupTitle: false,
            badge: '',
            badgeClass: '',
            role: [''],
            submenu: [],
          }, {
            path: '/admin/checklist',
            title: 'Check Lists',
            moduleName: 'admin',
            iconType: '',
            icon: '',
            class: 'ml-sub-sub-menu',
            groupTitle: false,
            badge: '',
            badgeClass: '',
            role: [''],
            submenu: [],
          }],
      }

    ],
  },
  // {
  //   path: '',
  //   title: 'Multi level Menu',
  //   moduleName: 'multilevel',
  //   iconType: 'material-icons-two-tone',
  //   icon: 'slideshow',
  //   class: 'menu-toggle',
  //   groupTitle: false,
  //   badge: '',
  //   badgeClass: '',
  //   role: ['Admin'],
  //   submenu: [
  //     {
  //       path: '/multilevel/first1',
  //       title: 'First',
  //       moduleName: 'multilevel',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/',
  //       title: 'Second',
  //       moduleName: 'secondlevel',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-sub-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [
  //         {
  //           path: '/multilevel/secondlevel/second1',
  //           title: 'Second 1',
  //           moduleName: 'secondlevel',
  //           iconType: '',
  //           icon: '',
  //           class: 'ml-sub-sub-menu',
  //           groupTitle: false,
  //           badge: '',
  //           badgeClass: '',
  //           role: [''],
  //           submenu: [],
  //         },
  //         {
  //           path: '/multilevel/secondlevel/second2',
  //           title: 'Second 2',
  //           moduleName: 'secondlevel',
  //           iconType: '',
  //           icon: '',
  //           class: 'ml-sub-sub-menu',
  //           groupTitle: false,
  //           badge: '',
  //           badgeClass: '',
  //           role: [''],
  //           submenu: [],
  //         },
  //       ],
  //     },
  //     {
  //       path: '/multilevel/first3',
  //       title: 'Third',
  //       moduleName: 'multilevel',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //   ],
  // },
  {
    path: '/authentication/signin',
    title: 'Logout',
    moduleName: 'logout',
    iconType: 'material-icons-two-tone',
    icon: 'power_settings_new',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },
];
