import { Vnf3FirebaseInterface } from "./Vnf3Firebase.interface";

export default class Vnf3Firebase implements Vnf3FirebaseInterface  {
    plugin : any = window;
    checkPluginConnection(): boolean {
        return this.plugin.FirebasePlugin ? true : false;
    }
    getVerificationID(number: string | number, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.getVerificationID(number, success, error);
    }
    getInstanceId(success: Function, error: Function): void {
        this.plugin.FirebasePlugin.getInstanceId(success, error);
    }

    getId(success: Function, error: Function): void {
        this.plugin.FirebasePlugin.getId(success, error);
    }

    getToken(success: Function, error: Function): void {
        this.plugin.FirebasePlugin.getToken(success, error);
    }

    onNotificationOpen(success: Function, error: Function): void {
        this.plugin.FirebasePlugin.onNotificationOpen(success, error);
    }

    onTokenRefresh(success: Function, error: Function): void {
        this.plugin.FirebasePlugin.onTokenRefresh(success, error);
    }

    grantPermission(success: Function, error: Function): void {
        this.plugin.FirebasePlugin.grantPermission(success, error);
    }

    hasPermission(success: Function, error: Function): void {
        this.plugin.FirebasePlugin.hasPermission(success, error);
    }

    setBadgeNumber(number: string | number, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.setBadgeNumber(number,success, error);
    }

    getBadgeNumber(success: Function, error: Function): void {
        this.plugin.FirebasePlugin.getBadgeNumber(success, error);
    }

    subscribe(topic: string | number, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.subscribe(topic, success, error);
    }

    unsubscribe(topic: string | number, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.unsubscribe(topic, success, error);
    }

    unregister(success: Function, error: Function): void {
        this.plugin.FirebasePlugin.unregister(success, error);
    }

    logEvent(name: string, params: any, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.logEvent(name, params, success, error);
    }

    logError(message: string, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.logError(message, success, error);
    }

    setCrashlyticsUserId(userId: number, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.setCrashlyticsUserId(userId, success, error);
    }

    setScreenName(name: string | number, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.setScreenName(name, success, error);
    }

    setUserId(id: number | string, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.setUserId(id, success, error);
    }

    setUserProperty(name: string, value: any, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.setUserProperty(name, value, success, error);
    }

    activateFetched(success: Function, error: Function): void {
        this.plugin.FirebasePlugin.activateFetched(success, error);
    }

    fetch(cacheExpirationSeconds: number, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.fetch(cacheExpirationSeconds, success, error);
    }

    getByteArray(key: string, namespace: any, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.getByteArray(key, namespace, success, error);
    }

    getValue(key: string, namespace: any, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.getValue(key, namespace, success, error);
    }

    getInfo(success: Function, error: Function): void {
        this.plugin.FirebasePlugin.getInfo(success, error);
    }

    setConfigSettings(settings: any, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.setConfigSettings(settings, success, error);
    }

    setDefaults(defaults: any, namespace: string, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.setDefaults(defaults, namespace, success, error);
    }

    startTrace(name: string, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.startTrace(name, success, error);
    }

    incrementCounter(name: string, counterNamed: any, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.incrementCounter(name, counterNamed, success, error);
    }

    stopTrace(name: string, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.incrementCounter(name, success, error);
    }

    setAnalyticsCollectionEnabled(enabled: any, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.setAnalyticsCollectionEnabled(enabled, success, error);
    }

    setPerformanceCollectionEnabled(enable: any, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.setAnalyticsCollectionEnabled(enable, success, error);
    }

    verifyPhoneNumber(number: string | number, timeOutDuration: any, success: Function, error: Function): void {
        this.plugin.FirebasePlugin.verifyPhoneNumber(number, timeOutDuration, success, error);
    }

    clearAllNotifications(success: Function, error: Function): void {
        this.plugin.FirebasePlugin.verifyPhoneNumber(success, error);
    }
}