CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    qid VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) UNIQUE NOT NULL,
    start_date DATE NOT NULL,
    project_value NUMERIC(15,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



CREATE TABLE IF NOT EXISTS payment_stages (
    id SERIAL PRIMARY KEY,
    project_id INTEGER NOT NULL,
    stage_number INTEGER NOT NULL,
    stage_name VARCHAR(255) NOT NULL,
    customer_percentage NUMERIC(5,2) NOT NULL,
    client_payment NUMERIC(15,2) NOT NULL,
    payment_date DATE NOT NULL,

    CONSTRAINT fk_project
        FOREIGN KEY (project_id)
        REFERENCES projects(id)
        ON DELETE CASCADE
);

