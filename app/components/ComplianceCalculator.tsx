"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, AlertTriangle, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const questions = [
    {
        id: 1,
        question: "Do you collect personal data from Indian residents?",
        options: ["Yes", "No", "Not sure"],
        weight: { "Yes": 0, "No": 100, "Not sure": 50 }
    },
    {
        id: 2,
        question: "Do you have a documented consent management process?",
        options: ["Yes, comprehensive", "Partially", "No"],
        weight: { "Yes, comprehensive": 100, "Partially": 50, "No": 0 }
    },
    {
        id: 3,
        question: "Can users withdraw their consent easily?",
        options: ["Yes, automated", "Manual process", "Not implemented"],
        weight: { "Yes, automated": 100, "Manual process": 50, "Not implemented": 0 }
    },
    {
        id: 4,
        question: "Do you maintain a data inventory/mapping?",
        options: ["Yes, updated regularly", "Outdated documentation", "No"],
        weight: { "Yes, updated regularly": 100, "Outdated documentation": 40, "No": 0 }
    },
    {
        id: 5,
        question: "Have you conducted Privacy Impact Assessments?",
        options: ["Yes, recently", "Long time ago", "Never"],
        weight: { "Yes, recently": 100, "Long time ago": 30, "Never": 0 }
    },
    {
        id: 6,
        question: "Do you have a process for vendor risk assessments?",
        options: ["Yes, automated", "Manual reviews", "No process"],
        weight: { "Yes, automated": 100, "Manual reviews": 50, "No process": 0 }
    },
    {
        id: 7,
        question: "Is your consent collection multilingual (22 Indian languages)?",
        options: ["Yes", "Partially", "English only"],
        weight: { "Yes": 100, "Partially": 60, "English only": 20 }
    }
];

export function ComplianceCalculator() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswer = (answer: string) => {
        const newAnswers = { ...answers, [currentQuestion]: answer };
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
        } else {
            // Calculate score
            const totalScore = questions.reduce((acc, q, idx) => {
                const answer = newAnswers[idx];
                return acc + ((q.weight as any)[answer] || 0);
            }, 0);
            const finalScore = Math.round((totalScore / (questions.length * 100)) * 100);
            setScore(finalScore);
            setTimeout(() => setShowResults(true), 300);
        }
    };

    const restart = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setShowResults(false);
        setScore(0);
    };

    const getScoreColor = (score: number) => {
        if (score >= 80) return "text-green-500";
        if (score >= 50) return "text-blue-500";
        return "text-red-500";
    };

    const getScoreBgColor = (score: number) => {
        if (score >= 80) return "from-green-500 to-emerald-600";
        if (score >= 50) return "from-amber-500 to-orange-600";
        return "from-red-500 to-rose-600";
    };

    const getScoreMessage = (score: number) => {
        if (score >= 80) return {
            title: "Excellent! You're on the right track 🎉",
            desc: "Your compliance posture is strong, but there's always room for improvement.",
            action: "Let's optimize your remaining gaps"
        };
        if (score >= 50) return {
            title: "Good start, but gaps remain ⚠️",
            desc: "You have some compliance measures in place, but significant work is needed.",
            action: "We can help you reach 100% compliance"
        };
        return {
            title: "Critical compliance gaps detected 🚨",
            desc: "You're at high risk of DPDP penalties (up to ₹250 crore). Immediate action required.",
            action: "Start your compliance journey now"
        };
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <div className="w-full max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
                {!showResults ? (
                    <motion.div
                        key="questions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
                    >
                        {/* Progress Bar */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-sm font-semibold text-[#152645]">
                                    Question {currentQuestion + 1} of {questions.length}
                                </span>
                                <span className="text-sm font-semibold text-[#0e488b]">
                                    {Math.round(progress)}%
                                </span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-[#0e488b] to-[#3b82f6]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </div>

                        {/* Question */}
                        <motion.div
                            key={currentQuestion}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-[#152645] mb-6">
                                {questions[currentQuestion].question}
                            </h3>

                            {/* Options */}
                            <div className="space-y-3">
                                {questions[currentQuestion].options.map((option, idx) => (
                                    <motion.button
                                        key={option}
                                        onClick={() => handleAnswer(option)}
                                        className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-[#0e488b] hover:bg-[#0e488b]/5 transition-all group cursor-pointer"
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-base font-medium text-gray-700 group-hover:text-[#0e488b]">
                                                {option}
                                            </span>
                                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#0e488b] group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="results"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                    >
                        {/* Score Display */}
                        <div className="text-center mb-8">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", duration: 0.6 }}
                                className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br ${getScoreBgColor(score)} mb-6`}
                            >
                                <span className="text-5xl font-bold text-white">{score}</span>
                            </motion.div>

                            <h3 className="text-3xl font-bold text-[#152645] mb-3">
                                {getScoreMessage(score).title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-6">
                                {getScoreMessage(score).desc}
                            </p>
                        </div>

                        {/* Detailed Breakdown */}
                        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                            <h4 className="text-lg font-bold text-[#152645] mb-4">Your Compliance Breakdown</h4>
                            <div className="space-y-3">
                                {questions.map((q, idx) => {
                                    const answer = answers[idx];
                                    const answerScore = (q.weight as any)[answer];
                                    return (
                                        <div key={q.id} className="flex items-center gap-3">
                                            {answerScore === 100 ? (
                                                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            ) : answerScore >= 50 ? (
                                                <AlertTriangle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                            ) : (
                                                <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                                            )}
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-700">{q.question}</p>
                                                <p className="text-xs text-gray-500">Your answer: {answer}</p>
                                            </div>
                                            <span className={`text-sm font-bold ${getScoreColor(answerScore)}`}>
                                                {answerScore}%
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="flex-1 px-6 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg text-center flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Sparkles className="w-5 h-5" />
                                {getScoreMessage(score).action}
                            </Link>
                            <button
                                onClick={restart}
                                className="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-[#152645] font-semibold rounded-xl transition-all border border-gray-300 cursor-pointer"
                            >
                                Retake Assessment
                            </button>
                        </div>

                        {/* Deadline Reminder */}
                        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-xl">
                            <p className="text-sm text-red-700 text-center">
                                <strong>⏰ Compliance Deadline:</strong> May 13, 2027 — Only {Math.floor((new Date('2027-05-14').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
