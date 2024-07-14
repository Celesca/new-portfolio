CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    year INT NOT NULL,
    category VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO books (title, author, description, year, category, image) VALUES
('AI and Machine Learning for Coders เส้นทางและหลักการสู่การโค้ด AI', 'Laurence Moroney', 'เรียนรู้การเขียนโค้ด AI และ Machine Learning ในภาษา Python จากผู้เชี่ยวชาญ', 2021, 'AI', 'https://bci.kinokuniya.com/jsp/images/book-img/97861/97861682/9786168282281.JPG');

INSERT INTO books (title, author, description, year, category, image) VALUES
('การพัฒนาแอพพลิเคชัน Machine Learning', 'Emmanuel Ameisen', 'เริ่มจากแนวคิดสู่ตัวผลิตภัณฑ์ เรียบเรียงด้วยสำนวนไทย อ่านเข้าใจง่าย', 2021, 'AI', 'https://images-se-ed.com/ws/Storage/Originals/978616/828/9786168282182L.jpg?h=49d6d0999791ec37bbf607d9ae295ae5');