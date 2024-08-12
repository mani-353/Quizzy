const quizzes = {
    Block_Chain: {
        easy: [
            { question: "What is a blockchain?", answers: ["A type of cryptocurrency", "A digital ledger", "A type of cloud storage", "A social network"], correct: 1 },
            { question: "Which cryptocurrency was the first to use blockchain?", answers: ["Ethereum", "Litecoin", "Bitcoin", "Ripple"], correct: 2 },
            { question: "What is the maximum supply of Bitcoin?", answers: ["21 million", "50 million", "100 million", "Unlimited"], correct: 0 },
            { question: "Which of the following is a popular blockchain platform?", answers: ["React", "Ethereum", "TensorFlow", "Linux"], correct: 1 },
            { question: "Which is a feature of blockchain?", answers: ["Centralization", "Reversibility", "Transparency", "Privacy"], correct: 2 },
        ],
        medium: [
            { question: "What consensus algorithm does Bitcoin use?", answers: ["Proof of Stake", "Proof of Work", "Delegated Proof of Stake", "Byzantine Fault Tolerance"], correct: 1 },
            { question: "In which year was Bitcoin launched?", answers: ["2009", "2012", "2015", "2018"], correct: 0 },
            { question: "What does 'mining' mean in blockchain?", answers: ["Creating new blocks", "Validating transactions", "Removing blocks", "Reversing transactions"], correct: 1 },
            { question: "Which of these is a common problem blockchain aims to solve?", answers: ["Transparency", "Scalability", "Interoperability", "All of the above"], correct: 3 },
            { question: "What is a smart contract?", answers: ["A legal document", "A self-executing contract with the terms of the agreement directly written into code", "A cryptocurrency wallet", "A type of blockchain node"], correct: 1 },
        ],
        hard: [
            { question: "What is the key cryptographic principle behind blockchain?", answers: ["SHA-256 Hashing", "RSA Encryption", "Elliptic Curve Cryptography", "Quantum Cryptography"], correct: 0 },
            { question: "Which of these is a scalability solution for blockchains?", answers: ["Sharding", "Forking", "Mining", "Hashing"], correct: 0 },
            { question: "What problem does the Byzantine Generals' Problem address in blockchain?", answers: ["Consensus among distributed parties", "Proof of work", "Scalability", "Privacy"], correct: 0 },
            { question: "What is the primary function of a Merkle tree in a blockchain?", answers: ["To verify data integrity", "To generate new blocks", "To create smart contracts", "To enhance privacy"], correct: 0 },
            { question: "Which algorithm is used in Ethereum's proof of work?", answers: ["Ethash", "SHA-256", "Scrypt", "Proof of Stake"], correct: 0 },
        ]
    },
    Cyber_Security: {
        easy: [
            { question: "Which of the following is a common cybersecurity threat?", answers: ["Phishing", "Spamming", "Typing", "Browsing"], correct: 0 },
            { question: "What does HTTPS stand for?", answers: ["HyperText Transfer Protocol Simple", "HyperText Transfer Protocol Secure", "HighText Transfer Protocol Secure", "Hyper Transfer Protocol Secure"], correct: 1 },
            { question: "What is a firewall?", answers: ["A type of malware", "A security system for monitoring and controlling network traffic", "A type of network", "A programming language"], correct: 1 },
            { question: "What does 'VPN' stand for?", answers: ["Virtual Public Network", "Virtual Private Network", "Virtual Protected Network", "Virtual Primary Network"], correct: 1 },
            { question: "Which of these is a strong password?", answers: ["123456", "password", "Qwerty", "P@ssw0rd!"], correct: 3 },
        ],
        medium: [
            { question: "What is a DDoS attack?", answers: ["Data Deletion on Server", "Distributed Denial of Service", "Data Diversion Over Server", "Direct Denial of Security"], correct: 1 },
            { question: "What is the purpose of a hash function in cybersecurity?", answers: ["Encrypt data", "Create unique digital signatures", "Compress data", "Transfer data"], correct: 1 },
            { question: "Which of the following is a technique used in social engineering attacks?", answers: ["Brute Force", "Phishing", "SQL Injection", "Buffer Overflow"], correct: 1 },
            { question: "What is two-factor authentication?", answers: ["Using two passwords", "Using two devices", "Combining two forms of identification", "Using two networks"], correct: 2 },
            { question: "What is a zero-day vulnerability?", answers: ["A vulnerability discovered after an update", "A vulnerability that is unknown to the software vendor", "A vulnerability found on the first day of the year", "A vulnerability related to zero-sum encryption"], correct: 1 },
        ],
        hard: [
            { question: "Which encryption algorithm is considered quantum-resistant?", answers: ["AES-256", "RSA-2048", "Elliptic Curve Cryptography", "Lattice-based cryptography"], correct: 3 },
            { question: "What is the primary purpose of the Kerberos protocol?", answers: ["End-to-end encryption", "Network Authentication", "Secure File Transfer", "VPN Encryption"], correct: 1 },
            { question: "Which of the following is a side-channel attack?", answers: ["Brute Force", "Timing attack", "Cross-site scripting", "SQL Injection"], correct: 1 },
            { question: "What is a honeypot in cybersecurity?", answers: ["A decoy system to attract attackers", "A secure network node", "A tool for network monitoring", "An encrypted communication channel"], correct: 0 },
            { question: "What is a man-in-the-middle attack?", answers: ["Interception of communication between two parties", "A brute-force attack", "A denial-of-service attack", "A type of firewall"], correct: 0 },
        ]
    },
    Full_Stack: {
        easy: [
            { question: "What does HTML stand for?", answers: ["HyperText Markup Language", "HyperTool Markup Language", "Hyper Transfer Markup Language", "HyperText Make Language"], correct: 0 },
            { question: "Which language is used to style web pages?", answers: ["HTML", "Python", "CSS", "JavaScript"], correct: 2 },
            { question: "Which of the following is a JavaScript framework?", answers: ["React", "Django", "Laravel", "Ruby on Rails"], correct: 0 },
            { question: "What does 'CRUD' stand for?", answers: ["Create, Read, Update, Delete", "Create, Run, Undo, Delete", "Create, Render, Upload, Download", "Copy, Read, Upload, Delete"], correct: 0 },
            { question: "Which of these is a version control system?", answers: ["Node.js", "Git", "Jenkins", "Docker"], correct: 1 },
        ],
        medium: [
            { question: "What does the 'this' keyword refer to in JavaScript?", answers: ["The global object", "The object that calls the function", "The object being created", "The document object"], correct: 1 },
            { question: "Which database is NoSQL?", answers: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"], correct: 2 },
            { question: "Which HTTP method is used to update data on the server?", answers: ["GET", "POST", "PUT", "DELETE"], correct: 2 },
            { question: "What does the 'virtual DOM' in React do?", answers: ["Renders HTML", "Updates the real DOM directly", "Improves performance by reducing direct DOM manipulation", "Handles events"], correct: 2 },
            { question: "Which of the following is a backend framework?", answers: ["Bootstrap", "React", "Node.js", "Vue.js"], correct: 2 },
        ],
        hard: [
            { question: "What is the purpose of a closure in JavaScript?", answers: ["To create private variables", "To enhance performance", "To manage memory", "To prevent hoisting"], correct: 0 },
            { question: "Which of these is a common design pattern in full-stack development?", answers: ["Singleton", "Observer", "Model-View-Controller (MVC)", "Factory"], correct: 2 },
            { question: "What does 'ORM' stand for in the context of databases?", answers: ["Object-Relational Mapping", "Object-Resource Management", "Online Resource Manager", "Object-Relational Model"], correct: 0 },
            { question: "Which protocol is commonly used for real-time web applications?", answers: ["HTTP", "WebSocket", "FTP", "SMTP"], correct: 1 },
            { question: "Which of these is a state management library for React?", answers: ["Redux", "Express", "Jest", "Mocha"], correct: 0 },
        ]
    },
    IT: {
        easy: [
            { question: "What does 'CPU' stand for?", answers: ["Central Processing Unit", "Central Program Unit", "Central Power Unit", "Central Performance Unit"], correct: 0 },
            { question: "What is RAM used for?", answers: ["Storing data long-term", "Performing calculations", "Temporary storage of data", "Managing network traffic"], correct: 2 },
            { question: "Which of these is an operating system?", answers: ["HTML", "Linux", "CSS", "MySQL"], correct: 1 },
            { question: "What is the primary function of an operating system?", answers: ["Manage hardware and software resources", "Provide internet access", "Run web applications", "Encrypt data"], correct: 0 },
            { question: "Which of the following is an example of application software?", answers: ["Windows", "Microsoft Word", "BIOS", "Motherboard"], correct: 1 },
        ],
        medium: [
            { question: "What does 'IP' in 'IP address' stand for?", answers: ["Internet Protocol", "Internet Program", "Internal Protocol", "Internal Program"], correct: 0 },
            { question: "Which of the following is a relational database?", answers: ["MongoDB", "Cassandra", "MySQL", "Redis"], correct: 2 },
            { question: "What does 'DNS' stand for?", answers: ["Domain Name System", "Direct Name System", "Digital Network Service", "Domain Network Service"], correct: 0 },
            { question: "Which command is used to check the network connectivity between two devices?", answers: ["ping", "tracert", "ipconfig", "netstat"], correct: 0 },
            { question: "What does 'HTTP' stand for?", answers: ["HyperText Transfer Protocol", "HyperText Translation Protocol", "Hyper Transfer Text Protocol", "HyperText Transition Protocol"], correct: 0 },
        ],
        hard: [
            { question: "What does RAID stand for?", answers: ["Redundant Array of Independent Disks", "Random Access Integrated Data", "Remote Access Independent Disks", "Random Array of Independent Disks"], correct: 0 },
            { question: "Which of these is a secure file transfer protocol?", answers: ["FTP", "SFTP", "HTTP", "SMTP"], correct: 1 },
            { question: "What is the primary purpose of a 'proxy server'?", answers: ["To route traffic between clients and servers", "To store data", "To encrypt data", "To run applications"], correct: 0 },
            { question: "Which of the following is a key component of cloud computing?", answers: ["Virtualization", "Blockchain", "Firewall", "Router"], correct: 0 },
            { question: "What is the difference between IPv4 and IPv6?", answers: ["IPv6 has longer addresses", "IPv4 is faster", "IPv6 is used for local networks only", "IPv4 is more secure"], correct: 0 },
        ]
    }
};


let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let selectedTopic = '';
let level = '';
let userName = '';
let userAnswers = [];
let incorrectCount = 0;

function startQuiz() {
    userName = document.getElementById('username').value;
    const usernameRegex = /^[a-zA-Z]{6,}$/;
    if (!usernameRegex.test(userName)) {
        alert('Username must be at least 6 characters long and contain only letters.');
        return;
    }

    document.getElementById('welcome').classList.remove('active');
    document.getElementById('topic-selection').classList.add('active');
}


function selectTopic(topic) {
    selectedTopic = topic;
    document.getElementById('topic-selection').classList.remove('active');
    document.getElementById('level-selection').classList.add('active');
}

function startQuizLevel(selectedLevel) {
    level = selectedLevel;
    document.getElementById('level-selection').classList.remove('active');
    document.getElementById('rules').classList.add('active');
}

function showQuiz() {
    let accept = document.getElementById('accept-terms');
    if (!accept.checked) {
        alert('Please accept the terms and conditions.');
        return;
    } else {
        currentQuiz = quizzes[selectedTopic][level];
        currentQuestionIndex = 0;
        score = 0;
        incorrectCount = 0;
        userAnswers = [];
        document.getElementById('rules').classList.remove('active');
        document.getElementById('quiz').classList.add('active');
        loadQuestion();
    }
}

function loadQuestion() {
    if (currentQuestionIndex >= currentQuiz.length) {
        showResults();
        return;
    }
    const question = currentQuiz[currentQuestionIndex];
    document.getElementById('quiz-title').textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.length}`;
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
    <ul>
        <li><h3>${question.question}<h3></li>
        ${question.answers.map((answer, index) => `<li><input type="radio" name="answer" id="answer${index}" value="${index}"><label for="answer${index}">${answer}</label></li>`).join('')}</ul>
    `;
    startTimer();
}

function startTimer() {
    const timeLimit = level === 'hard' ? 20 : 30;
    const timerBar = document.getElementById('timer-bar');
    let timeRemaining = timeLimit;
    timerBar.style.width = '100%';
    timer = setInterval(() => {
        timeRemaining--;
        const percent = (timeRemaining / timeLimit) * 100;
        timerBar.style.width = `${percent}%`;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            submitAnswer(true);
        }
    }, 1000);
}

function submitAnswer(isTimeUp = false) {
    clearInterval(timer);
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const correctAnswer = currentQuiz[currentQuestionIndex].correct;
    let isCorrect = false;

    if (!isTimeUp && selectedAnswer && parseInt(selectedAnswer.value) === correctAnswer) {
        score = score + 2;
        isCorrect = true;
    } else if (!isTimeUp && selectedAnswer) {
        incorrectCount++;
    }

    userAnswers.push({
        selected: selectedAnswer ? parseInt(selectedAnswer.value) : null,
        isCorrect: isCorrect,
        correctAnswer: correctAnswer,
        isSkipped: !selectedAnswer
    });

    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    document.getElementById('quiz').classList.remove('active');
    document.getElementById('result').classList.add('active');

    let finalScore = score;
    if (level !== 'easy') {
        finalScore -= (incorrectCount * 0.5);
    }

    document.getElementById('user-name').textContent = userName;
    document.getElementById('score').textContent = `You scored ${finalScore.toFixed(1)} out of ${currentQuiz.length * 2}.`;
    document.getElementById('view-answers-btn').style.display = 'block';
}

function displayAnswers() {
    currentQuestionIndex = 0;
    document.getElementById('result').classList.remove('active');
    document.getElementById('answers').classList.add('active');
    loadAnswer();
}

function loadAnswer() {
    const question = currentQuiz[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];

    const answerContainer = document.getElementById('answers-container');
    answerContainer.innerHTML = `
    <ul>
        <li>${currentQuestionIndex + 1}.${question.question}</li></ul>
    <ol type="A">
        ${question.answers.map((answer, index) => {
        let className = '';
        if (index === userAnswer.selected) {
            className = userAnswer.isCorrect ? 'correct' : 'incorrect';
        }
        if (userAnswer.isSkipped && index === userAnswer.correctAnswer) {
            className = 'skipped';
        }
        if (className !== 'correct' && className !== 'skipped' && userAnswer.correctAnswer === index) {
            className = 'correct';

        }
        return `<li class="${className}">${answer}</li>`;
    }).join('')}
    </ol>
    `;

    document.getElementById('back-btn').style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    document.getElementById('next-btn').style.display = currentQuestionIndex < currentQuiz.length - 1 ? 'inline-block' : 'none';
    document.getElementById('restart-btn').style.display = currentQuestionIndex === currentQuiz.length - 1 ? 'inline-block' : 'none';
}

function navigateAnswer(direction) {
    currentQuestionIndex += direction;
    loadAnswer();
}

function restartQuiz() {
    document.getElementById('answers').classList.remove('active');
    document.getElementById('welcome').classList.add('active');
    document.getElementById('username').value = '';
    currentQuestionIndex = 0;
    score = 0;
    incorrectCount = 0;
    userAnswers = [];
    let accept = document.getElementById('accept-terms');
    accept.checked = !accept.checked;

}

document.getElementById('back-btn').addEventListener('click', () => navigateAnswer(-1));
document.getElementById('next-btn').addEventListener('click', () => navigateAnswer(1));
document.getElementById('restart-btn').addEventListener('click', restartQuiz);
