
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

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Chest Workout 1', 'Dumbbell Bench Press', 'https://www.youtube.com/watch?v=VmB1G1K7v94', 'Dumbbell Chest Fly', 'https://www.youtube.com/watch?v=eozdVDA78K0', 'Dumbbell Incline Press', 'https://www.youtube.com/watch?v=8iPEnn-ltC8', 'Dumbbell Incline Fly', 'https://www.youtube.com/watch?v=bDaIL_zKbGs');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Chest Workout 2', 'Barbell Bench Press', 'https://www.youtube.com/watch?v=EUjh50tLlBo', 'Decline Dumbbell Bench Press', 'https://www.youtube.com/watch?v=0xRvl4Qv3ZY', 'Machine Incline Press', 'https://www.youtube.com/watch?v=I_dcachDaRI', 'Machine Chest Fly', 'https://www.youtube.com/watch?v=Z57CtFmRMxA');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Chest Workout 3', 'Dumbbell Floor Press', 'https://www.youtube.com/watch?v=uUGDRwge4F8', 'Dumbbell Floor Fly', 'https://www.youtube.com/watch?v=DNZ6IwviZYE', 'Machine Chest Press', 'https://www.youtube.com/watch?v=NwzUje3z0qY', 'Low Cable Chest Fly', 'https://www.youtube.com/watch?v=M1N804yWA-8');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Chest Workout 4', 'Smith Machine Bench Press', 'https://www.youtube.com/watch?v=z_r6hDOYtO0', 'Smith Machine Incline Press', 'https://www.youtube.com/watch?v=b8DqTO6ak0k', 'High Cable Chest Fly', 'https://www.youtube.com/watch?v=Iwe6AmxVf7o', 'Mid Cable Chest Fly', 'https://www.youtube.com/watch?v=WEM9FCIPlxQ');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Shoulder Workout 1', 'Seated Dumbbell Shoulder Press', 'https://www.youtube.com/watch?v=qEwKCR5JCog', 'Standing Dumbbell Lateral Raise', 'https://www.youtube.com/watch?v=3VcKaXpzqRo', 'Standing Dumbbell Front Raise', 'https://www.youtube.com/watch?v=ugPIPY7j-GM', 'Seated Dumbbell Arnold Press', 'https://www.youtube.com/watch?v=mXRhpXwW-gs');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Shoulder Workout 2', 'Standing Barbell Overhead Press', 'https://www.youtube.com/watch?v=2yjwXTZQDDI', 'Rope Face Pull', 'https://www.youtube.com/watch?v=eFxMixk_qPQ', 'Standing Barbell Upright Row', 'https://www.youtube.com/watch?v=nIJGvsdNtFE', 'Wide Grip Standing Barbell Shrug', 'https://www.youtube.com/watch?v=pqYr_lb04O4');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Shoulder Workout 3', 'Seated Smith Machine Overhead Press', 'https://www.youtube.com/watch?v=4Mw8r3df65o', 'Dumbbell Bent Over Lateral Raise', 'https://www.youtube.com/watch?v=ttvfGg9d76c', 'Dumbbell Push Press', 'https://www.youtube.com/watch?v=hbE9iMNjLDQ', 'Standing Cable Delt Raise', 'https://www.youtube.com/watch?v=PmXz2Ik-On4');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Shoulder Workout 4', 'Machine Overhead Press', 'https://www.youtube.com/watch?v=Wqq43dKW1TU', 'Dumbbell Arm Circles', 'https://www.youtube.com/watch?v=bP52FXTlzjA', 'Machine Lateral Side Raise', 'https://www.youtube.com/watch?v=0FUpcwj_1z4', 'Standing Dumbbell Shrug', 'https://www.youtube.com/watch?v=cJRVVxmytaM');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Leg Workout 1', 'Barbell Back Squat', 'https://www.youtube.com/watch?v=SW_C1A-rejs', 'Dumbbell Goblet Squat', 'https://www.youtube.com/watch?v=a-dqF4NL2K4', 'Lying Hamstring Curl', 'https://www.youtube.com/watch?v=bvs-Y_qgghE', 'Machine Leg Extension', 'https://www.youtube.com/watch?v=YyvSfVjQeL0');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Leg Workout 2', 'Barbell Front Squat', 'https://www.youtube.com/watch?v=uYumuL_G_V0', 'Barbell Alternating Lunge', 'https://www.youtube.com/watch?v=Z6i2IQqTuU0', 'Barbell Hip Thrust', 'https://www.youtube.com/watch?v=Zp26q4BY5HE', 'Dumbbell Sumo Squat', 'https://www.youtube.com/watch?v=IUWYPAx_JkY');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Leg Workout 3', 'Barbell Deadlift', 'https://www.youtube.com/watch?v=sLqn0uP6iCU', 'Dumbbell Box Step Up', 'https://www.youtube.com/watch?v=37tVohr7LcE', 'Cable Donkey Kickback', 'https://www.youtube.com/watch?v=3nDCUmratPs', 'Dumbbell Calf Raise', 'https://www.youtube.com/watch?v=_iYwv4QVFjM');

INSERT INTO "exercises" (workout_name, exercise_1, video_1, exercise_2, video_2, exercise_3, video_3, exercise_4, video_4)
VALUES('Leg Workout 4', 'Machine Leg Press', 'https://www.youtube.com/watch?v=oujca3_Shgw', 'Dumbbell Alternating Lunge', 'https://www.youtube.com/watch?v=X5JFsnxtBPc', 'Landmine Squat', 'https://www.youtube.com/watch?v=_mfORB47xMs', 'Dumbbell Bulgarin Split Squat', 'https://www.youtube.com/watch?v=vLuhN_glFZ8');


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

