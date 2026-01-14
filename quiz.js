// Mindset Culture Test Data based on Carol Dweck's research
const quizData = {
    dimensions: [
        {
            id: 'failure-response',
            title: 'Response to Failure',
            description: 'How your organization handles mistakes, setbacks, and learning from failure',
            color: 'var(--nk-blue)',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>`,
            questions: [
                {
                    text: "When someone makes a mistake, the focus is on learning rather than blame.",
                    growthIndicator: true
                },
                {
                    text: "Failed projects are treated as valuable learning opportunities that are openly discussed.",
                    growthIndicator: true
                },
                {
                    text: "People feel safe admitting when they don't know something or need help.",
                    growthIndicator: true
                }
            ]
        },
        {
            id: 'feedback-culture',
            title: 'Feedback & Development',
            description: 'How feedback is given, received, and used for growth across the organization',
            color: 'var(--nk-green)',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>`,
            questions: [
                {
                    text: "Feedback is given regularly and constructively, not just during annual reviews.",
                    growthIndicator: true
                },
                {
                    text: "Leaders actively seek feedback from their teams and act on it visibly.",
                    growthIndicator: true
                },
                {
                    text: "Development conversations focus on potential and growth, not just current performance.",
                    growthIndicator: true
                }
            ]
        },
        {
            id: 'talent-beliefs',
            title: 'Talent & Potential',
            description: 'Beliefs about whether abilities are fixed or can be developed over time',
            color: 'var(--nk-yellow)',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>`,
            questions: [
                {
                    text: "We believe most skills can be developed with effort, good strategies, and coaching.",
                    growthIndicator: true
                },
                {
                    text: "Hiring and promotions consider potential and learning ability, not just proven track record.",
                    growthIndicator: true
                },
                {
                    text: "People are encouraged to take on stretch assignments outside their comfort zone.",
                    growthIndicator: true
                }
            ]
        },
        {
            id: 'innovation-risk',
            title: 'Innovation & Risk',
            description: 'How the organization approaches new ideas, experimentation, and calculated risks',
            color: 'var(--nk-lilac)',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>`,
            questions: [
                {
                    text: "New ideas are welcomed and explored, even if they challenge the status quo.",
                    growthIndicator: true
                },
                {
                    text: "Experimentation is encouraged, and there's tolerance for calculated risks that don't pay off.",
                    growthIndicator: true
                },
                {
                    text: "Success is celebrated, but so is the courage to try something new.",
                    growthIndicator: true
                }
            ]
        }
    ],
    interpretations: {
        fixed: {
            range: [12, 28],
            title: "Predominantly Fixed Mindset Culture",
            description: "Your organization shows signs of a fixed mindset culture. This often manifests as blame-focused responses to failure, limited risk-taking, and beliefs that talent is innate rather than developed. While this can create short-term stability, it typically limits innovation, employee engagement, and long-term adaptability.",
            insights: [
                {
                    title: "Psychological Safety Gap",
                    text: "People may fear admitting mistakes or asking for help, leading to hidden problems and missed learning opportunities."
                },
                {
                    title: "Talent Bottleneck",
                    text: "Over-reliance on 'star performers' and underinvestment in developing broader talent pools."
                },
                {
                    title: "Innovation Hesitancy",
                    text: "Risk aversion may be stifling new ideas and preventing necessary adaptation to change."
                }
            ],
            actions: [
                "Start by modeling vulnerability as a leader - share your own learning moments and mistakes openly.",
                "Implement 'learning reviews' after projects that focus on insights gained, not blame assignment.",
                "Revise performance conversations to include development goals and growth trajectories.",
                "Create small, safe spaces for experimentation where failure is expected and celebrated as learning."
            ],
            reflections: [
                "What would change if your team felt completely safe admitting they don't know something?",
                "Which 'failures' in the past year actually contained the seeds of important innovations?",
                "How might your organization's definition of 'talent' be limiting who gets opportunities?"
            ]
        },
        mixed: {
            range: [29, 44],
            title: "Mixed Mindset Culture",
            description: "Your organization shows elements of both fixed and growth mindset cultures. This is common - most organizations have pockets of growth mindset thinking alongside more fixed patterns. The opportunity lies in identifying what's working well and extending those practices more broadly.",
            insights: [
                {
                    title: "Inconsistent Experience",
                    text: "Different teams or departments may have very different cultures around failure, feedback, and development."
                },
                {
                    title: "Stated vs. Lived Values",
                    text: "There may be a gap between what the organization says it values and how people actually experience the culture."
                },
                {
                    title: "Leadership Variation",
                    text: "Individual managers likely have significant influence on whether their teams experience growth or fixed mindset dynamics."
                }
            ],
            actions: [
                "Identify the teams or leaders who embody growth mindset practices and learn from them.",
                "Address the gap between stated values and actual behaviors in leadership development.",
                "Create consistent rituals around feedback, learning from failure, and celebrating effort.",
                "Audit your HR processes (hiring, performance reviews, promotions) for fixed mindset signals."
            ],
            reflections: [
                "Where in your organization do you see the strongest growth mindset culture, and what makes it different?",
                "What systems or processes might be inadvertently rewarding fixed mindset behaviors?",
                "How do you personally respond when someone on your team fails at something important?"
            ]
        },
        growth: {
            range: [45, 60],
            title: "Predominantly Growth Mindset Culture",
            description: "Your organization demonstrates strong growth mindset characteristics. People feel safe to take risks, learn from failure, and develop their abilities. This creates a foundation for innovation, engagement, and adaptability. The opportunity now is to deepen and sustain these practices.",
            insights: [
                {
                    title: "Strong Foundation",
                    text: "Your culture supports the psychological safety and development orientation that drives high performance."
                },
                {
                    title: "Continuous Improvement",
                    text: "Even strong growth mindset cultures can deepen - there's always room to model and reinforce these values."
                },
                {
                    title: "Cultural Resilience",
                    text: "Growth mindset cultures can be fragile under pressure - sustaining them requires ongoing attention."
                }
            ],
            actions: [
                "Document and share stories of learning from failure to reinforce cultural norms.",
                "Ensure growth mindset practices survive leadership transitions by embedding them in systems.",
                "Watch for regression during high-pressure periods and actively reinforce growth mindset responses.",
                "Help other organizations learn from your approach - teaching deepens your own practice."
            ],
            reflections: [
                "How do you protect your growth mindset culture when the organization is under pressure?",
                "What would it take to make these cultural strengths even more embedded and resilient?",
                "How are you developing the next generation of leaders to sustain this culture?"
            ]
        }
    }
};

// Quiz State
let currentSection = 0;
let answers = {};

// Initialize answers object
function initAnswers() {
    quizData.dimensions.forEach((dimension, dimIndex) => {
        dimension.questions.forEach((_, qIndex) => {
            const questionId = `q${dimIndex}_${qIndex}`;
            answers[questionId] = null;
        });
    });
}

// Show a specific screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

// Start the quiz
function startQuiz() {
    initAnswers();
    currentSection = 0;
    showScreen('quiz');
    renderSection();
}

// Render current section
function renderSection() {
    const dimension = quizData.dimensions[currentSection];

    // Update header
    document.getElementById('dimensionTitle').textContent = dimension.title;
    document.getElementById('dimensionDescription').textContent = dimension.description;
    document.getElementById('currentDimension').textContent = `Dimension ${currentSection + 1}`;

    // Update icon
    const iconEl = document.getElementById('dimensionIcon');
    iconEl.innerHTML = dimension.icon;
    iconEl.style.borderColor = dimension.color;
    iconEl.querySelector('svg').style.stroke = dimension.color;

    // Update progress bar
    const progress = ((currentSection + 1) / quizData.dimensions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;

    // Render questions
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';

    dimension.questions.forEach((question, index) => {
        const questionId = `q${currentSection}_${index}`;
        const questionNum = (currentSection * 3) + index + 1;

        const questionEl = document.createElement('div');
        questionEl.className = 'question';
        questionEl.innerHTML = `
            <p class="question-text"><span class="question-number">${questionNum}.</span> ${question.text}</p>
            <div class="rating-labels">
                <span>Disagree</span>
                <span>Agree</span>
            </div>
            <div class="rating-options">
                ${[1, 2, 3, 4, 5].map(value => `
                    <label class="rating-option ${answers[questionId] === value ? 'selected' : ''}">
                        <input type="radio" name="${questionId}" value="${value}"
                            ${answers[questionId] === value ? 'checked' : ''}
                            onchange="selectAnswer('${questionId}', ${value})">
                        <span class="rating-value">${value}</span>
                    </label>
                `).join('')}
            </div>
        `;
        container.appendChild(questionEl);
    });

    // Update navigation buttons
    document.getElementById('prevBtn').style.display = currentSection === 0 ? 'none' : 'block';

    const isLastSection = currentSection === quizData.dimensions.length - 1;
    document.getElementById('nextBtn').textContent = isLastSection ? 'See My Results' : 'Next';
}

// Select an answer
function selectAnswer(questionId, value) {
    answers[questionId] = value;

    // Update visual selection
    const options = document.querySelectorAll(`input[name="${questionId}"]`);
    options.forEach(option => {
        option.closest('.rating-option').classList.remove('selected');
        if (option.checked) {
            option.closest('.rating-option').classList.add('selected');
        }
    });
}

// Validate current section
function validateSection() {
    const dimension = quizData.dimensions[currentSection];
    for (let i = 0; i < dimension.questions.length; i++) {
        const questionId = `q${currentSection}_${i}`;
        if (answers[questionId] === null) {
            return false;
        }
    }
    return true;
}

// Next section
function nextSection() {
    if (!validateSection()) {
        alert('Please answer all questions before continuing.');
        return;
    }

    if (currentSection < quizData.dimensions.length - 1) {
        currentSection++;
        renderSection();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        showScreen('email-capture');
    }
}

// Previous section
function previousSection() {
    if (currentSection > 0) {
        currentSection--;
        renderSection();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Submit email and show results
async function submitEmail(event) {
    event.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');

    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-flex';
    submitBtn.disabled = true;

    const userData = {
        email: document.getElementById('email').value
    };

    try {
        // Send to newsletter API
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || 'Failed to subscribe');
        }

        console.log('Subscription successful:', result);
        calculateAndShowResults();

    } catch (error) {
        console.error('Subscription error:', error);
        // Still show results even if subscription fails
        calculateAndShowResults();
    } finally {
        // Reset button state
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
    }
}

// Calculate scores
function calculateScores() {
    let totalScore = 0;

    const dimensionScores = quizData.dimensions.map((dimension, dimIndex) => {
        let score = 0;
        for (let i = 0; i < dimension.questions.length; i++) {
            const questionId = `q${dimIndex}_${i}`;
            score += answers[questionId] || 0;
        }
        totalScore += score;
        return {
            ...dimension,
            score: score,
            maxScore: 15,
            percentage: (score / 15) * 100
        };
    });

    // Determine interpretation based on total score
    let interpretation;
    if (totalScore <= 28) {
        interpretation = quizData.interpretations.fixed;
    } else if (totalScore <= 44) {
        interpretation = quizData.interpretations.mixed;
    } else {
        interpretation = quizData.interpretations.growth;
    }

    return {
        totalScore,
        maxScore: 60,
        percentage: (totalScore / 60) * 100,
        dimensionScores,
        interpretation
    };
}

// Get color based on score percentage
function getScoreColor(percentage) {
    if (percentage < 47) {
        return 'var(--fixed-color)';
    } else if (percentage < 75) {
        return 'var(--mixed-color)';
    } else {
        return 'var(--growth-color)';
    }
}

// Calculate and show results
function calculateAndShowResults() {
    const results = calculateScores();

    // Show screen first
    showScreen('results');

    // Update overall score
    document.getElementById('overallScore').textContent = results.totalScore;

    // Position marker on meter
    const marker = document.getElementById('meterMarker');
    setTimeout(() => {
        marker.style.left = `${results.percentage}%`;
    }, 300);

    // Update interpretation
    document.getElementById('interpretationTitle').textContent = results.interpretation.title;
    document.getElementById('interpretationText').textContent = results.interpretation.description;

    // Render dimension bars
    const dimensionBarsContainer = document.getElementById('dimensionBars');
    dimensionBarsContainer.innerHTML = results.dimensionScores.map((dim, index) => `
        <div class="dimension-bar-item" style="animation-delay: ${index * 0.1}s">
            <div class="dimension-bar-header">
                <div class="dimension-bar-icon" style="border-color: ${dim.color}">
                    ${dim.icon.replace('stroke="currentColor"', `stroke="${dim.color}"`)}
                </div>
                <span class="dimension-bar-title">${dim.title}</span>
                <span class="dimension-bar-score">${dim.score}/${dim.maxScore}</span>
            </div>
            <div class="dimension-bar">
                <div class="dimension-bar-fill" data-width="${dim.percentage}" style="background: linear-gradient(90deg, var(--fixed-color), ${getScoreColor(dim.percentage)});"></div>
            </div>
        </div>
    `).join('');

    // Animate bars after delay
    setTimeout(() => {
        document.querySelectorAll('.dimension-bar-fill').forEach((bar, i) => {
            setTimeout(() => {
                bar.style.width = bar.dataset.width + '%';
            }, i * 100);
        });
    }, 300);

    // Render insights
    const insightsContainer = document.getElementById('keyInsights');
    insightsContainer.innerHTML = results.interpretation.insights.map(insight => `
        <div class="insight-item">
            <h4>${insight.title}</h4>
            <p>${insight.text}</p>
        </div>
    `).join('');

    // Render actions
    const actionsList = document.getElementById('actionsList');
    actionsList.innerHTML = results.interpretation.actions.map(action => `
        <li>${action}</li>
    `).join('');

    // Render reflection questions
    const reflectionList = document.getElementById('reflectionList');
    reflectionList.innerHTML = results.interpretation.reflections.map(q => `<li>${q}</li>`).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initAnswers();
});
