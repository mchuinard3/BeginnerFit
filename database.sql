
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "exercises" (
"id" SERIAL PRIMARY KEY, 
"workout_name" VARCHAR (255),
"exercise_1" VARCHAR(255),
"video_1" VARCHAR(2000),
"exercise_2" VARCHAR(255),
"video_2" VARCHAR(2000),
"exercise_3" VARCHAR(255),
"video_3" VARCHAR(2000),
"exercise_4" VARCHAR(255),
"video_4" VARCHAR(2000)
);

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Back Workout 1', 'Lat Pulldown', 'https://www.youtube.com/watch?v=OebX_D6Byuc', 'Barbell Bent Over Row', 'https://www.youtube.com/watch?v=mTQ_qg37MJk', 'Incline Dumbbell Row', 'https://www.youtube.com/watch?v=tZUYS7X50so', 'Seated Cable Low Row', 'https://www.youtube.com/watch?v=GZbfZ033f74');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Back Workout 2', 'Machine Assisted Pullup', 'https://www.youtube.com/watch?v=31H5Wf9Yw3I', 'Dumbbell Bent Over Row', 'https://www.youtube.com/watch?v=QFq5jdwWwX4', 'Straight Arm Cable Pullover', 'https://www.youtube.com/watch?v=5b7jiVX6wyU', 'Hammer Grip Lat Pulldown', 'https://www.youtube.com/watch?v=5psEgviCBSI');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Back Workout 3', 'Dumbbell Reverse Fly', 'https://www.youtube.com/watch?v=JoCRRZ3zRtI', 'Smith Machine Bent Over Row', 'https://www.youtube.com/watch?v=zNGwcrK8YnE', 'Barbell Reverse Grip Bent Over Row', 'https://www.youtube.com/watch?v=cZvQNvTUUu0', 'Rear Deltoid Machine Row', 'https://www.youtube.com/watch?v=0kB3U5hUjl0');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Back Workout 4', 'Machine Rear Delt Reverse Fly', 'https://www.youtube.com/watch?v=nnn9kg33K2g', 'Rope Face Pull', 'https://www.youtube.com/watch?v=wnPX6Fwe-Fg', 'Dumbbell Pullover', 'https://www.youtube.com/watch?v=FK4rHfWKEac', 'Machine Assisted Pullup', 'https://www.youtube.com/watch?v=31H5Wf9Yw3I');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Arm Workout 1', 'Dumbbell Hammer Curl', 'https://www.youtube.com/watch?v=P5sXHLmXmBM', 'Barbell Bicep Curl', 'https://www.youtube.com/watch?v=LY1V6UbRHFM', 'Tricep Rope Pushdown', 'https://www.youtube.com/watch?v=vB5OHsJ3EME', 'Dumbbell Skull Crusher', 'https://www.youtube.com/watch?v=ir5PsbniVSc');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Arm Workout 2', 'Standing Inside Grip Rope Curl', 'https://www.youtube.com/watch?v=Odz1T8WmDBI', 'Outside Grip EZ Bar Curl', 'https://www.youtube.com/watch?v=AsAVbj7puKo', 'Machine Assisted Tricep Dip', 'https://www.youtube.com/watch?v=sxtUdH5lxP4', 'Seated Overhead Dumbbell Extension', 'https://www.youtube.com/watch?v=YbX7Wd8jQ-Q');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Arm Workout 3', 'Dumbbell Incline Bicep Curl', 'https://www.youtube.com/watch?v=soxrZlIl35U', 'Dumbbell Bicep Curl', 'https://www.youtube.com/watch?v=sAq_ocpRh_I', 'Bench Tricep Dip', 'https://www.youtube.com/watch?v=c3ZGl4pAwZ4', 'Dumbbell Tricep Floor Press', 'https://www.youtube.com/watch?v=cXq31uYKsyg');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Arm Workout 4', 'Machine Assisted Chin-up', 'https://www.youtube.com/watch?v=D_4IlBjqjpw', 'EZ Bar Preacher Curl', 'https://www.youtube.com/watch?v=Gydpcouclx8', 'Tricep Tate Press', 'https://www.youtube.com/watch?v=cZJ-4Ll3uAo', 'Tricep JM Press', 'https://www.youtube.com/watch?v=rZcWkXEOKGI');

CREATE TABLE "history" (
"id" SERIAL PRIMARY KEY, 
"user_id" VARCHAR (255),
"exercises_id" VARCHAR(255),
"weight_used_1" VARCHAR(255),
"weight_used_2" VARCHAR(255),
"weight_used_3" VARCHAR(255),
"weight_used_4" VARCHAR(255),
"date" DATE
);

