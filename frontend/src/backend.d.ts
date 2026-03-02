import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Question {
    id: bigint;
    topic: string;
    year: bigint;
    answerOptions: Array<string>;
    questionText: string;
    correctAnswerIndex: bigint;
}
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addQuestion(newQuestion: Question): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    clearArray(): Promise<void>;
    getAdminQuestions(): Promise<Array<Question>>;
    getByTopic(topic: string): Promise<Array<Question>>;
    getByYear(year: bigint): Promise<Array<Question>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getQuestions(): Promise<Array<Question>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    recordAttempt(questionId: bigint, answerIndex: bigint): Promise<boolean>;
    retrieveArray(): Promise<Array<bigint>>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    storeArray(array: Array<bigint>): Promise<void>;
}
