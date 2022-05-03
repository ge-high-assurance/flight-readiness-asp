%% USC 44809 (a)
no_certification :-
      aircraft_purpose(recreational), 
	  aircraft_operation(in_accordance_with_community_and_faa),
	  aircract_observer_nearby,
	  aircraft_non_interference_with_manned_aircraft,
	  aircraft_airspace_condition_1,
	  aircraft_airspace_condition_2,
	  operator_passed_aeronautical_knowledge_test, 
	  operator_has_proof_of_test_available,
	  aircraft_registered_and_marked.
	 

aircraft_observer_nearby :-
         aircraft_within_visual_line_of_sight.

aircraft_observer_nearby :- 
          visual_observer_colocated
		  
		  
aircraft_airspace_condition_1 :-
        operated_in_class_bcd.
	
aircraft_airspace_condition_2 :_
         correctly_operated_in_class_e.
		 
correctly_operated_in_class_e :-
           designated_airport(Airport),
		   class_e_lateral_points(Airport, LateralPoints),
		   aircraft_flies_within(LateralPoints).
		   