export interface Vnf3FirebaseInterface {

    plugin : any;
    checkPluginConnection() : boolean
    getVerificationID(number: string | number, success: Function, error: Function): void

    getInstanceId(success: Function, error: Function): void

    getId(success: Function, error: Function): void

    getToken(success: Function, error: Function): void

    onNotificationOpen(success: Function, error: Function): void

    onTokenRefresh(success: Function, error: Function): void

    grantPermission(success: Function, error: Function): void

    hasPermission(success: Function, error: Function): void

    setBadgeNumber(number: string | number, success: Function, error: Function): void

    getBadgeNumber(success: Function, error: Function): void

    subscribe(topic: string | number, success: Function, error: Function): void

    unsubscribe(topic: string | number, success: Function, error: Function): void

    unregister(success: Function, error: Function): void

    logEvent(name: string, params: any, success: Function, error: Function): void

    logError(message: string, success: Function, error: Function): void

    setCrashlyticsUserId(userId: number, success: Function, error: Function): void

    setScreenName(name: string | number, success: Function, error: Function): void

    setUserId(id: number | string, success: Function, error: Function): void

    setUserProperty(name: string, value: any, success: Function, error: Function): void

    activateFetched(success: Function, error: Function): void

    fetch(cacheExpirationSeconds: number, success: Function, error: Function): void

    getByteArray(key: string, namespace: any, success: Function, error: Function): void

    getValue(key: string, namespace: any, success: Function, error: Function): void

    getInfo(success: Function, error: Function): void

    setConfigSettings(settings: any, success: Function, error: Function): void

    setDefaults(defaults: any, namespace: string, success: Function, error: Function): void

    startTrace(name: string, success: Function, error: Function): void

    incrementCounter(name: string, counterNamed: any, success: Function, error: Function): void

    stopTrace(name: string, success: Function, error: Function): void

    setAnalyticsCollectionEnabled(enabled: any, success: Function, error: Function): void

    setPerformanceCollectionEnabled(enable: any, success: Function, error: Function): void

    verifyPhoneNumber(number: string | number, timeOutDuration: any, success: Function, error: Function): void

    clearAllNotifications(success: Function, error: Function): void
}