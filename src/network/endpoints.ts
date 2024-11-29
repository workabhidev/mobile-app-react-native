export const endpoints = {
  auth: {
    login: '/api/customer/login',
    register: '/api/customer/register',
    setNewPassword: '/api/customer/set-password',
    forgotPassword: '/api/customer/forgot-password',
    verifyOtp: '/api/customer/validate-otp',
    getUserProfile: '/api/customer/',
    updateUserProfile: '/api/customer/update-profile/',
    updateProfilePhoto: 'api/customer/profile-photo',
    deleteUser: 'api/customer/delete',
    changePassword: 'api/customer/change-password',
    updateDeviceToken: 'api/customer/update-device-token',
  },
  contractors: {
    register: '/api/contractor/register',
    getStates: '/api/states',
    getCategories: '/api/categories',
    getCities: '/api/cities',
    contractors: '/api/contractors/category-group',
    contractorProfile: '/api/contractor',
    updateContractorProfile: '/api/contractor/update-profile',
    deleteContractor: '/api/contractor/delete',
    contractorProfilePhoto: 'api/contractor/profile-photo',
    preferredContractor: 'api/contractors-index',
  },
  reports: {
    reports: '/api/reports/create',
    recentReports: '/api/recent-reports',
    favoriteReports: '/api/favorite-reports',
    sharedReports: '/api/shared-reports',
    addShareReports: '/api/share-report',
    addFavoriteReports: '/api/add-fav-report',
    reportSummary: '/api/report-summary',
  },
  webview: {
    terms: 'https://www.inspectreply-ai.com/terms',
  },
};
