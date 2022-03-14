"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vnf3Firebase {
    constructor() {
        this.plugin = window;
    }
    checkPluginConnection() {
        return this.plugin.FirebasePlugin ? true : false;
    }
    getVerificationID(number, success, error) {
        this.plugin.FirebasePlugin.getVerificationID(number, success, error);
    }
    getInstanceId(success, error) {
        this.plugin.FirebasePlugin.getInstanceId(success, error);
    }
    getId(success, error) {
        this.plugin.FirebasePlugin.getId(success, error);
    }
    getToken(success, error) {
        this.plugin.FirebasePlugin.getToken(success, error);
    }
    onNotificationOpen(success, error) {
        this.plugin.FirebasePlugin.onNotificationOpen(success, error);
    }
    onTokenRefresh(success, error) {
        this.plugin.FirebasePlugin.onTokenRefresh(success, error);
    }
    grantPermission(success, error) {
        this.plugin.FirebasePlugin.grantPermission(success, error);
    }
    hasPermission(success, error) {
        this.plugin.FirebasePlugin.hasPermission(success, error);
    }
    setBadgeNumber(number, success, error) {
        this.plugin.FirebasePlugin.setBadgeNumber(number, success, error);
    }
    getBadgeNumber(success, error) {
        this.plugin.FirebasePlugin.getBadgeNumber(success, error);
    }
    subscribe(topic, success, error) {
        this.plugin.FirebasePlugin.subscribe(topic, success, error);
    }
    unsubscribe(topic, success, error) {
        this.plugin.FirebasePlugin.unsubscribe(topic, success, error);
    }
    unregister(success, error) {
        this.plugin.FirebasePlugin.unregister(success, error);
    }
    logEvent(name, params, success, error) {
        this.plugin.FirebasePlugin.logEvent(name, params, success, error);
    }
    logError(message, success, error) {
        this.plugin.FirebasePlugin.logError(message, success, error);
    }
    setCrashlyticsUserId(userId, success, error) {
        this.plugin.FirebasePlugin.setCrashlyticsUserId(userId, success, error);
    }
    setScreenName(name, success, error) {
        this.plugin.FirebasePlugin.setScreenName(name, success, error);
    }
    setUserId(id, success, error) {
        this.plugin.FirebasePlugin.setUserId(id, success, error);
    }
    setUserProperty(name, value, success, error) {
        this.plugin.FirebasePlugin.setUserProperty(name, value, success, error);
    }
    activateFetched(success, error) {
        this.plugin.FirebasePlugin.activateFetched(success, error);
    }
    fetch(cacheExpirationSeconds, success, error) {
        this.plugin.FirebasePlugin.fetch(cacheExpirationSeconds, success, error);
    }
    getByteArray(key, namespace, success, error) {
        this.plugin.FirebasePlugin.getByteArray(key, namespace, success, error);
    }
    getValue(key, namespace, success, error) {
        this.plugin.FirebasePlugin.getValue(key, namespace, success, error);
    }
    getInfo(success, error) {
        this.plugin.FirebasePlugin.getInfo(success, error);
    }
    setConfigSettings(settings, success, error) {
        this.plugin.FirebasePlugin.setConfigSettings(settings, success, error);
    }
    setDefaults(defaults, namespace, success, error) {
        this.plugin.FirebasePlugin.setDefaults(defaults, namespace, success, error);
    }
    startTrace(name, success, error) {
        this.plugin.FirebasePlugin.startTrace(name, success, error);
    }
    incrementCounter(name, counterNamed, success, error) {
        this.plugin.FirebasePlugin.incrementCounter(name, counterNamed, success, error);
    }
    stopTrace(name, success, error) {
        this.plugin.FirebasePlugin.incrementCounter(name, success, error);
    }
    setAnalyticsCollectionEnabled(enabled, success, error) {
        this.plugin.FirebasePlugin.setAnalyticsCollectionEnabled(enabled, success, error);
    }
    setPerformanceCollectionEnabled(enable, success, error) {
        this.plugin.FirebasePlugin.setAnalyticsCollectionEnabled(enable, success, error);
    }
    verifyPhoneNumber(number, timeOutDuration, success, error) {
        this.plugin.FirebasePlugin.verifyPhoneNumber(number, timeOutDuration, success, error);
    }
    clearAllNotifications(success, error) {
        this.plugin.FirebasePlugin.verifyPhoneNumber(success, error);
    }
}
exports.default = Vnf3Firebase;
