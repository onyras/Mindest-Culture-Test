// Mindset Culture Test
// Based on Mary Murphy's research on organizational mindset cultures
// (Murphy is Carol Dweck's protégé and author of "Cultures of Growth")
const quizData = {
    dimensions: [
        {
            id: 'evaluative-situations',
            title: 'Evaluative Situations',
            description: 'How your organization approaches performance reviews, assessments, and judgment',
            color: 'var(--nk-blue)',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>`,
            questions: [
                {
                    text: "Performance reviews focus primarily on identifying who the top performers are.",
                    growthIndicator: false
                },
                {
                    text: "When evaluating candidates, we prioritize impressive credentials and past achievements over potential.",
                    growthIndicator: false
                },
                {
                    text: "In meetings, the most valued contributions come from those already recognized as experts.",
                    growthIndicator: false
                }
            ]
        },
        {
            id: 'high-effort',
            title: 'High-Effort Situations',
            description: 'What happens when tasks require significant effort, struggle, or persistence',
            color: 'var(--nk-green)',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>`,
            questions: [
                {
                    text: "When someone struggles with a task, it raises questions about whether they're right for the role.",
                    growthIndicator: false
                },
                {
                    text: "The best performers make their work look effortless.",
                    growthIndicator: false
                },
                {
                    text: "Taking a long time to master something suggests it might not be your strength.",
                    growthIndicator: false
                }
            ]
        },
        {
            id: 'critical-feedback',
            title: 'Critical Feedback',
            description: 'How the organization handles criticism, mistakes, and setbacks',
            color: 'var(--nk-yellow)',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>`,
            questions: [
                {
                    text: "Receiving critical feedback feels like a judgment of your capabilities.",
                    growthIndicator: false
                },
                {
                    text: "Making a visible mistake can significantly impact how others perceive your competence.",
                    growthIndicator: false
                },
                {
                    text: "People are careful about what they share in case it reflects poorly on them.",
                    growthIndicator: false
                }
            ]
        },
        {
            id: 'success-of-others',
            title: 'Success of Others',
            description: 'How people respond when colleagues achieve success or recognition',
            color: 'var(--nk-lilac)',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>`,
            questions: [
                {
                    text: "When a colleague receives recognition, it can feel like there's less available for everyone else.",
                    growthIndicator: false
                },
                {
                    text: "Competition for top positions motivates people to do their best work.",
                    growthIndicator: false
                },
                {
                    text: "Resources and opportunities are primarily directed toward proven high performers.",
                    growthIndicator: false
                }
            ]
        }
    ],
    interpretations: {
        // Note: Questions are phrased to indicate genius culture traits
        // Higher scores = more genius culture characteristics
        // Lower scores = more growth culture characteristics
        genius: {
            range: [45, 60],
            title: "Strong Culture of Genius Characteristics",
            description: "Your responses suggest your organization operates with many characteristics of what researchers call a 'Culture of Genius' - where talent is seen as fixed and innate. This isn't necessarily intentional; it often develops from well-meaning practices like celebrating star performers or seeking 'the best and brightest.' However, research shows these cultures can inadvertently limit collaboration, innovation, and the development of broader talent.",
            insights: [
                {
                    title: "The Star Search Dynamic",
                    text: "When organizations focus on identifying who 'has it,' people shift energy from development to performance - proving themselves rather than improving themselves."
                },
                {
                    title: "Hidden Information Costs",
                    text: "In environments where appearing capable matters most, people may hesitate to share struggles, ask questions, or surface problems early - leading to larger issues down the road."
                },
                {
                    title: "Untapped Potential",
                    text: "Concentrating resources on proven performers can mean missing contributions from people whose potential hasn't yet been recognized or developed."
                }
            ],
            actions: [
                "Notice how 'talent' language shapes decisions - who gets opportunities, whose ideas get heard, and who receives investment.",
                "Experiment with sharing your own learning edges as a leader. This signals that development is valued, not just demonstrated competence.",
                "Examine whether performance systems inadvertently encourage competition over collaboration.",
                "Create contexts where effort and strategy are visible and valued, not just outcomes."
            ],
            reflections: [
                "What messages does your organization send about what makes someone valuable here?",
                "When was the last time someone in a leadership role openly discussed something they were working to improve?",
                "How might the people who don't fit the current 'star' profile contribute if given different opportunities?"
            ]
        },
        mixed: {
            range: [29, 44],
            title: "Mixed Culture Characteristics",
            description: "Your responses indicate your organization has a blend of characteristics - some that support development and some that emphasize innate ability. This is common. Most organizations aren't purely one type or another, and the culture often varies by team, leader, or situation. The interesting question is where and when each pattern shows up.",
            insights: [
                {
                    title: "Context Matters",
                    text: "The same organization might feel very different depending on the team, the project, or the stakes. Mindset culture often fluctuates based on circumstances."
                },
                {
                    title: "Espoused vs. Experienced",
                    text: "Organizations often say they value learning and development, but the lived experience - especially under pressure - may tell a different story."
                },
                {
                    title: "Leader Influence",
                    text: "Individual managers and leaders have enormous influence on the local culture their teams experience, regardless of broader organizational messaging."
                }
            ],
            actions: [
                "Map where in your organization people feel safest to take risks and admit mistakes. What's different there?",
                "Pay attention to what happens when things go wrong - this often reveals the deeper cultural assumptions.",
                "Look at your systems (hiring, reviews, promotions) and ask what behaviors they actually reward.",
                "Start conversations about these patterns - awareness itself can begin to shift culture."
            ],
            reflections: [
                "In which situations does your organization lean more toward proving vs. improving?",
                "What would need to change for people to feel more comfortable showing their learning edges?",
                "How do you personally respond when facing a significant challenge or setback at work?"
            ]
        },
        growth: {
            range: [12, 28],
            title: "Strong Culture of Growth Characteristics",
            description: "Your responses suggest your organization operates with many characteristics of a 'Culture of Growth' - where abilities are seen as developable and the focus is on continuous improvement. This creates conditions for collaboration, innovation, and broader participation. The opportunity is to deepen these practices and ensure they're resilient under pressure.",
            insights: [
                {
                    title: "Psychological Safety Foundation",
                    text: "When people believe they can develop and that the organization supports that development, they're more willing to take smart risks and surface problems early."
                },
                {
                    title: "Collaborative Advantage",
                    text: "When success isn't zero-sum, people share information more freely and support each other's development - creating collective intelligence."
                },
                {
                    title: "Broader Talent Pipeline",
                    text: "Organizations that invest in developing people at all levels often find capabilities and contributions they wouldn't have discovered through a 'star search' approach."
                }
            ],
            actions: [
                "Document and share the specific practices that create this culture - making the implicit explicit helps sustain it.",
                "Watch for pressure points where old patterns might re-emerge (economic stress, leadership changes, high-stakes projects).",
                "Consider how you're developing the next generation of leaders to maintain and extend these cultural strengths.",
                "Share what you've learned with others - teaching often deepens understanding."
            ],
            reflections: [
                "What specific practices or norms contribute most to this culture? How might they be strengthened?",
                "What could threaten these patterns, and how would you protect them?",
                "How do new people learn 'how things work here' - is it explicit or absorbed?"
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
// Note: Higher scores indicate more "Culture of Genius" characteristics
// Lower scores indicate more "Culture of Growth" characteristics
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
    // High score = Genius culture, Low score = Growth culture
    let interpretation;
    if (totalScore >= 45) {
        interpretation = quizData.interpretations.genius;
    } else if (totalScore >= 29) {
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
// Note: Higher percentage = more genius culture traits
// We use a neutral color scheme to avoid implying judgment
function getScoreColor(percentage) {
    if (percentage < 47) {
        return 'var(--nk-green)';
    } else if (percentage < 75) {
        return 'var(--nk-yellow)';
    } else {
        return 'var(--nk-blue)';
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
                <div class="dimension-bar-fill" data-width="${dim.percentage}" style="background: ${getScoreColor(dim.percentage)};"></div>
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

// Toggle dropdown menu
function toggleDropdown() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.other-tests-dropdown');
    if (dropdown && !dropdown.contains(e.target)) {
        document.getElementById('dropdownMenu')?.classList.remove('open');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initAnswers();
});
