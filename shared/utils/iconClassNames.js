const ICON_CLASS_NAMES = {
    'plus'          : 'mdi mdi-plus',
    'minus'         : 'mdi mdi-minus',
    'save'          : 'mdi mdi-save',
    'help-circle'   : 'mdi mdi-help-circle',
    'list'          : 'mdi mdi-view-list',
    'play-circle'   : 'mdi mdi-play-circle',
    'stop'          : 'mdi mdi-stop',
    'email'         : 'mdi mdi-email',
    'message'       : 'mdi mdi-message',
    'user'          : 'mdi mdi-account',
    'exit'          : 'mdi mdi-exit-to-app',
    'burger'        : 'mdi mdi-menu',
    'search'        : 'mdi mdi-magnify',
    'globe'         : 'mdi mdi-earth',
    'dots'          : 'mdi mdi-dots-vertical',
    'facebook'      : 'mdi mdi-facebook',
    'linkedin'      : 'mdi mdi-linkedin',
    'googleplus'    : 'mdi mdi-google-plus',
    'twitter'       : 'mdi mdi-twitter',
    'vk'            : 'mdi mdi-vk',
    'facebook-box'  : 'mdi mdi-facebook-box',
    'linkedin-box'  : 'mdi mdi-linkedin-box',
    'googleplus-box': 'mdi mdi-google-plus-box',
    'twitter-box'   : 'mdi mdi-twitter-box',
    'vk-box'        : 'mdi mdi-vk-box',
    'github-box'    : 'mdi mdi-github-box',
    'edit'          : 'mdi mdi-pencil',
    'copy'          : 'mdi mdi-content-copy',
    'delete'        : 'mdi mdi-delete',
    'thumb-up'      : 'mdi mdi-thumb-up',
    'thumb-down'    : 'mdi mdi-thumb-down',
    'tag'           : 'mdi mdi-tag',
    'close'         : 'mdi mdi-close',
    'view'          : 'mdi mdi-eye',
    'play'          : 'mdi mdi-play',
    'attach'        : 'mdi mdi-attachment',
    'back'          : 'mdi mdi-arrow-left',
    'forward'       : 'mdi mdi-arrow-right',
    'deadline'      : 'mdi mdi-calendar-clock',
    'timer'         : 'mdi mdi-timer',
    'group'         : 'mdi mdi-account-multiple',
    'stats'         : 'mdi mdi-chart-pie',
    'add-user'      : 'mdi mdi-account-plus',
    'monitor'       : 'mdi mdi-timetable',
    'check'         : 'mdi mdi-check',
    'sort'          : 'mdi mdi-sort',
    'filter'        : 'mdi mdi-filter',
    'inbox'         : 'mdi mdi-inbox',
    'settings'      : 'mdi mdi-settings',
    'feedback'      : 'mdi mdi-message-alert',
    'circle-full'   : 'mdi mdi-checkbox-blank-circle',
    'share'         : 'mdi mdi-share-variant',
    'wall'          : 'mdi mdi-view-dashboard',
    'network'       : 'mdi mdi-account-multiple',
    'link'          : 'mdi mdi-link-variant',
    'markdown'      : 'mdi mdi-markdown',
    'play-outline'  : 'mdi mdi-play-circle-outline',
    'photo'         : 'mdi mdi-camera',
    'add-users'     : 'mdi mdi-account-plus',
    'refresh'       : 'mdi mdi-refresh',
    'lock'          : 'mdi mdi-lock',
    'lock-open'     : 'mdi mdi-lock-open',
    'users'         : 'mdi mdi-account-multiple',
    'upload'        : 'mdi mdi-upload',
    'more'          : 'mdi mdi-dots-horizontal',
    'chevron-down'  : 'mdi mdi-chevron-down',
    'chevron-up'    : 'mdi mdi-chevron-up',
    'bold'          : 'mdi mdi-format-bold',
    'italic'        : 'mdi mdi-format-italic',
    'header-1'      : 'mdi mdi-format-header-1',
    'header-2'      : 'mdi mdi-format-header-2',
    'header-3'      : 'mdi mdi-format-header-3',
    'image'         : 'mdi mdi-image',
    'quote'         : 'mdi mdi-format-quote',
    'fullscreen'    : 'mdi mdi-fullscreen',
    'code'          : 'mdi mdi-code-tags',
    'number-list'   : 'mdi mdi-format-list-numbers',
    'bullet-list'   : 'mdi mdi-format-list-bulleted',
    'strikethrough' : 'mdi mdi-format-strikethrough',
    'video'         : 'mdi mdi-video',
    'star-circle'   : 'mdi mdi-star-circle',
    'bulb'          : 'mdi mdi-lightbulb',
    'bulb-outline'  : 'mdi mdi-lightbulb-outline',
    'menu-up'       : 'mdi mdi-menu-up',
    'menu-down'     : 'mdi mdi-menu-down',
    'file'          : 'mdi mdi-file',
    'file-outline'  : 'mdi mdi-file-outline',
    'download'      : 'mdi mdi-download',
    'certificate'   : 'mdi mdi-certificate',
    'clipboard-text': 'mdi mdi-clipboard-text'
};

export function getIconClassName(type) {
    return ICON_CLASS_NAMES[type];
}
