:- use_module(library(scasp)).


% Rule 1:  I will not fly a model aircraft in a careless or reckless  manner 

  violation_1 :-  careless_reckless. 
  careless_reckless :- has_prior_history_of_violation.

% Rule 2: I will not interfere with and will yield the right of way to all human-carrying 
% aircraft using AMA’s See and Avoid Guidance and a spotter when appropriate

  violation_2 :- human_carrying_aircraft, not yield_right_of_way. 
  violation_2 :- human_carrying_aircraft, yield_right_of_way, not used_spotter.  

% Rule 3: I will not operate any model aircraft while I am under the influence of alcohol 
% or any drug that could adversely affect my ability to safely control the model.
  violation_3 :- alcohol_drug_influence.

% Rule 4: I will avoid 	flying directly over unprotected people, moving vehicles, and 
% occupied structures.
  
  violation_4 :- directly_over_people_vehicles_structures.

% Rule 5: I will fly Free Flight (FF) and Control Line (CL) models in compliance with 
%  AMA’s safety programming.
  
  violation_5 :- ff_cl, not ama_safety_programming.

% Rule 6: I will maintain visual contact of an RC model aircraft 
%without enhancement other than corrective lenses 
%prescribed to me. When using an advanced flight 
%system, such as an autopilot, or flying First-Person 
%View (FPV), I will comply with AMA’s Advanced Flight 
%System programming.

  violation_6 :- visual_contact_using_enhancement.
  violation_6 :- advanced_system_or_fpv, ama_advanced_flight_system_programming.

% Rule 7: I will only fly models weighing more than 55 pounds, including fuel, if certified 
%  through AMA’s Large Model Airplane Program
  
  violation_7 :- aircraft_weighs_above_55_pounds, not certified_by_ama_large_program.

% Rule 8:I will only fly a turbine-powered model aircraft in compliance with AMA’s Gas 
% Turbine Program.

  violation_8 :- turbine_model, not ama_gas_turbine_program.

% Rule 9: 	I will not fly a powered model outdoors closer than 25 feet to any individual, 
% except for myself or my helper(s) located at the flightline, unless I am taking off 
% and landing, or as otherwise provided in AMA’s Competition Regulation

  violation_9 :- closer_than_25_ft, not landing_takeoff.
  violation_9 :- closer_than_25_ft, landing_takeoff, not ama_competition_regulation.

% Rule 10: I will use an established safety line to separate all model aircraft operations 
% from spectators and bystanders.  

  violation_10 :- not uses_established_safety_line.


violation :- violation_1.  
violation :- violation_2.
violation :- violation_3.
violation :- violation_4.
violation :- violation_5.
violation :- violation_6.
violation :- violation_7.
violation :- violation_8.
violation :- violation_9.
violation :- violation_10.