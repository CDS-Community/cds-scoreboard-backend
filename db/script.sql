
CREATE DATABASE scoreboard-cds;

USE DATABASE scoreboard-cds;

-- TABLE : COMMISSION

CREATE TABLE public.commission (id serial NOT NULL,
                                          name character varying(30) NOT NULL,
                                                                     description character varying(100),
                                                                                           state_action character varying(4),
                                                                                                                  state boolean DEFAULT true,
                                                                                                                                        "createdAt" timestamp with time zone,
                                                                                                                                                                        "updatedAt" timestamp with time zone,
                                                                                                                                                                                                        PRIMARY KEY (id));


ALTER TABLE IF EXISTS public.level OWNER to postgres;

-- TABLE : LEVEL

CREATE TABLE public.level (id serial NOT NULL,
                                     name character varying(30) NOT NULL,
                                                                description character varying(100),
                                                                                      state boolean DEFAULT true,
                                                                                                            "createdAt" timestamp with time zone,
                                                                                                                                            "updatedAt" timestamp with time zone,
                                                                                                                                                                            PRIMARY KEY (id));


ALTER TABLE IF EXISTS public.level OWNER to postgres;

-- TABLE : POSITION

CREATE TABLE public.position (id serial NOT NULL,
                                        name character varying(30) NOT NULL,
                                                                   description character varying(100),
                                                                                         state boolean DEFAULT true,
                                                                                                               "createdAt" timestamp with time zone,
                                                                                                                                               "updatedAt" timestamp with time zone,
                                                                                                                                                                               PRIMARY KEY (id));


ALTER TABLE IF EXISTS public.level OWNER to postgres;

-- TABLE : ROLE

CREATE TABLE public.role (id serial NOT NULL,
                                    name character varying(30) NOT NULL,
                                                               description character varying(100),
                                                                                     state boolean DEFAULT true,
                                                                                                           "createdAt" timestamp with time zone,
                                                                                                                                           "updatedAt" timestamp with time zone,
                                                                                                                                                                           PRIMARY KEY (id));


ALTER TABLE IF EXISTS public.level OWNER to postgres;

-- TABLE : USER

CREATE TABLE public."user"
    (id serial NOT NULL,
               email character varying(20) NOT NULL,
                                           password character varying NOT NULL,
                                                                      name character varying(70) NOT NULL,
                                                                                                 birthdate date, date_of_register date, "number" numeric(15),
                                                                                                                                                 staff_state boolean DEFAULT false,
                                                                                                                                                                             img character varying, state boolean DEFAULT true,
                                                                                                                                                                                                                          role_id serial, position_id serial, "createdAt" timestamp without time zone,
                                                                                                                                                                                                                                                                                                 "updatedAt" timestamp without time zone,
                                                                                                                                                                                                                                                                                                                                    CONSTRAINT pk_user PRIMARY KEY (id), CONSTRAINT fk_role
     FOREIGN KEY (role_id) REFERENCES public.role (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID,
                                                                                                                CONSTRAINT fk_position
     FOREIGN KEY (position_id) REFERENCES public."position" (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID);


ALTER TABLE IF EXISTS public."user" OWNER to postgres;

-- TABLE : EVENTS

CREATE TABLE public.events
    (id serial NOT NULL,
               title character varying(50) NOT NULL,
                                           description character varying NOT NULL, date date, start_time time without time zone,
                                                                                                                           end_time time without time zone,
                                                                                                                                                      location character varying, coordinates point DEFAULT null,
                                                                                                                                                                                                            state boolean DEFAULT true,
                                                                                                                                                                                                                                  organizer_id serial NOT NULL,
                                                                                                                                                                                                                                                      "createdAt" timestamp without time zone,
                                                                                                                                                                                                                                                                                         "updatedAt" timestamp without time zone,
                                                                                                                                                                                                                                                                                                                            CONSTRAINT pk_events PRIMARY KEY (id), CONSTRAINT fk_user
     FOREIGN KEY (organizer_id) REFERENCES public."user" (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID);


ALTER TABLE IF EXISTS public.events OWNER to postgres;

-- TABLE : LEVEL DETAIL

CREATE TABLE public.level_detail
    (id serial NOT NULL, date date NOT NULL,
                                   level_score integer, state boolean DEFAULT true,
                                                                              user_id serial NOT NULL,
                                                                                             level_id serial NOT NULL,
                                                                                                             "createdAt" timestamp without time zone,
                                                                                                                                                "updatedAt" timestamp without time zone,
                                                                                                                                                                                   CONSTRAINT pk_level_detail PRIMARY KEY (id), CONSTRAINT fk_user
     FOREIGN KEY (user_id) REFERENCES public."user" (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID,
                                                                                                                  CONSTRAINT fk_level
     FOREIGN KEY (level_id) REFERENCES public.level (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID);

-- TABLE : STAFF EVENT

CREATE TABLE public.staff_event
    (id serial NOT NULL,
               start_time time without time zone,
                                            end_time time without time zone,
                                                                       description character varying, score integer, state boolean DEFAULT true,
                                                                                                                                           user_id serial NOT NULL,
                                                                                                                                                          event_id serial NOT NULL,
                                                                                                                                                                          commission_id serial NOT NULL,
                                                                                                                                                                                               "createdAt" timestamp without time zone,
                                                                                                                                                                                                                                  "updatedAt" timestamp without time zone,
                                                                                                                                                                                                                                                                     CONSTRAINT pk_staff_event PRIMARY KEY (id), CONSTRAINT fk_user
     FOREIGN KEY (user_id) REFERENCES public."user" (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID,
                                                                                                                  CONSTRAINT fk_event
     FOREIGN KEY (event_id) REFERENCES public.events (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID,
                                                                                                                   CONSTRAINT fk_commission
     FOREIGN KEY (commission_id) REFERENCES public.commission (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID);


ALTER TABLE IF EXISTS public.staff_event OWNER to postgres;

-- TABLE : ASSISTANCES

CREATE TABLE public.assitances
    (id serial NOT NULL,
               description character varying, "time" time without time zone NOT NULL,
                                                                            state boolean DEFAULT true,
                                                                                                  user_id serial, event_id serial, "createdAt" timestamp without time zone,
                                                                                                                                                                      "updatedAt" timestamp without time zone,
                                                                                                                                                                                                         CONSTRAINT pk_assistances PRIMARY KEY (id), CONSTRAINT fk_user
     FOREIGN KEY (user_id) REFERENCES public."user" (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID,
                                                                                                                  CONSTRAINT fk_event
     FOREIGN KEY (event_id) REFERENCES public.events (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID);


ALTER TABLE IF EXISTS public.assitances OWNER to postgres;

-- TABLE : IMG EVENT

CREATE TABLE public.img_event
    (id serial NOT NULL,
               title character varying(30) NOT NULL,
                                           description character varying(100),
                                                                 img character varying NOT NULL,
                                                                                       state boolean DEFAULT true,
                                                                                                             event_id serial NOT NULL,
                                                                                                                             "createdAt" timestamp without time zone,
                                                                                                                                                                "updatedAt" timestamp without time zone,
                                                                                                                                                                                                   CONSTRAINT pk_img_event PRIMARY KEY (id), CONSTRAINT fk_event
     FOREIGN KEY (event_id) REFERENCES public.events (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID);


ALTER TABLE IF EXISTS public.img_event OWNER to postgres;

-- TABLE : STAKE

CREATE TABLE public.stake
    (id serial NOT NULL, date time without time zone NOT NULL,
                                                     score integer, description character varying(100),
                                                                                          state boolean DEFAULT true,
                                                                                                                assistences_id serial NOT NULL,
                                                                                                                                      level_detail_id serial NOT NULL,
                                                                                                                                                             "createdAt" timestamp without time zone,
                                                                                                                                                                                                "updatedAt" timestamp without time zone,
                                                                                                                                                                                                                                   CONSTRAINT pk_stake PRIMARY KEY (id), CONSTRAINT fk_assistances
     FOREIGN KEY (assistences_id) REFERENCES public.assitances (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID,
                                                                                                                             CONSTRAINT fk_level_detail
     FOREIGN KEY (level_detail_id) REFERENCES public.level_detail (id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID);


ALTER TABLE IF EXISTS public.stake OWNER to postgres;