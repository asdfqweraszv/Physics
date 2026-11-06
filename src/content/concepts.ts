export const deeperConcepts:Record<string,string[]> = {
kinematics:[
'Graphs connect the definitions: the slope of a position–time graph is instantaneous velocity; the slope of a velocity–time graph is acceleration. Signed area under a velocity–time graph gives displacement. Total distance instead adds the magnitudes of all areas after splitting at velocity sign changes.',
'Choose coordinates before evaluating signs. Negative velocity means motion in the negative direction, not necessarily slowing down. Speed increases when velocity and acceleration have the same sign, and decreases when they have opposite signs. In two dimensions use the component of acceleration along velocity to decide whether speed changes.',
'For a projectile, use $v=\\sqrt{v_x^2+v_y^2}$ for speed and a quadrant-aware angle for direction. Horizontal speed is constant, but total speed generally is not. At the peak of an angled launch, $v_y=0$ while $v_x$ remains nonzero. Solve the vertical quadratic when landing height differs; discard negative-time roots outside the chosen motion interval.'
],
forces:[
'Mass measures inertia in kilograms; weight is a gravitational force in newtons. A person has the same mass in an elevator or on the Moon but can have different weight and scale readings. A scale reads the normal contact force, which depends on acceleration as well as gravity.',
'On an incline at angle $\\theta$, weight components are $mg\\sin\\theta$ downhill and $mg\\cos\\theta$ into the surface. If no other perpendicular forces or perpendicular acceleration exist, $N=mg\\cos\\theta$. Decide friction’s direction from relative sliding or its tendency, not merely from the coordinate axis.',
'Test static equilibrium before using a kinetic law: calculate the friction required for no slip, then compare its magnitude with $\\mu_sN$. If it exceeds that limit, sliding begins and kinetic friction applies. The coefficient is dimensionless. For an angled upward pull, also check $N>0$; a negative computed normal force signals loss of contact, not a pulling surface.'
],
energy:[
'Energy is a scalar, so energy balances often avoid detailed vector acceleration calculations. They give speed, not the full velocity direction or elapsed time by themselves. Work is signed even though energy is scalar: force along displacement adds kinetic energy, while force opposite displacement removes it.',
'Choose between two equivalent bookkeeping methods: count gravity’s work in net work, or move gravity into potential energy. Do not count the same effect both ways. With upward-positive height, $W_g=-mg\\Delta y$ and $\\Delta U_g=mg\\Delta y$. A reference shift changes individual potential energies but not their differences.',
'When all lost mechanical energy becomes heat, its amount is positive $Q_{diss}=-(\\Delta K+\\Delta U)$ for the chosen process without other transfers. Distinguish that positive heat magnitude from the negative work of friction. Mechanical energy may decrease while total energy of a sufficiently inclusive system remains conserved.'
],
momentum:[
'A system boundary decides which forces are external. During a short impact, large internal collision forces can dominate the impulses on individual objects, while gravity or friction contributes only a small external impulse to the whole system. Internal impulses cancel in the system total. A brief duration does not automatically guarantee negligible external impulse: inspect the directions and forces.',
'Elastic and perfectly inelastic describe kinetic-energy behavior or sticking, not whether momentum conservation is allowed. Both can conserve total momentum if external impulse is negligible. In two dimensions conserve x and y momentum separately; kinetic energy, when conserved, is a single scalar equation.',
'Impulse is the signed area under a force–time graph. A triangular pulse uses one half base times height; using peak force times the full interval overestimates it. Extending stopping time can lower average force for fixed momentum change, but average force is not necessarily the peak force experienced.'
],
rotation:[
'For circular motion, draw a radial axis toward the center at the position of interest. In a vertical circle the center direction changes with position: at the top gravity points inward; at the bottom it points outward relative to the inward axis. Thus the force equations differ: top $mg+N=mv^2/r$, bottom $N-mg=mv^2/r$ for an object supported by an inward normal force.',
'A frictionless bank derives from $N\\cos\\theta=mg$ vertically and $N\\sin\\theta=mv^2/r$ horizontally. Dividing eliminates N and m. With friction present, additional components matter; do not assume the no-friction design formula gives every permitted driving speed.',
'Torque is pivot-dependent. A long radius is not enough if the force is almost parallel to it; the effective lever arm is the shortest perpendicular distance to the line of action. Pick a clockwise/counterclockwise sign convention and add signed torques. A claim about a spool’s rolling direction requires the actual force lines and the contact constraint.'
],
heat:[
'Temperature describes thermal state; internal energy is a stored property; heat describes energy crossing a system boundary because of a temperature difference. Two objects at equal temperature need not have equal internal energy or heat capacity. Specific heat c is per kilogram, while the whole-object heat capacity is $C=mc$ in J/K.',
'In calorimetry, try a candidate final phase and temperature, then verify that it is physically possible. With ice and liquid water coexisting at ordinary pressure, final temperature is zero Celsius; only if enough energy remains after all ice melts can the liquid warm above zero. Conversely, warming subzero ice can require some zero-degree water to freeze.',
'The steady conduction equation assumes stable end temperatures and a nearly steady gradient. A lit match held briefly is also a transient problem, so its qualitative low-conductivity/small-area explanation should not be mistaken for an exact time-dependent temperature solution. Radiation depends on absolute temperatures to the fourth power, not their Celsius values or just the fourth power of a temperature difference.'
],
gases:[
'Use absolute pressure, not gauge pressure. Gauge pressure measures the excess above ambient: $P_{abs}=P_{gauge}+P_{atm}$. The ideal-gas equation relates the total molecular collision pressure to temperature; gauge zero is not zero molecular pressure.',
'Microscopic and mole-based descriptions match because $N=nN_A$ and $R=N_Ak_B$, where $N_A$ is Avogadro’s constant. Do not confuse N (number of molecules), n (moles) and the normal-force symbol N in mechanics; context and units disambiguate them.',
'At a fixed temperature the mean translational kinetic energy per molecule is independent of molecular mass, but lighter molecules must move faster to carry the same mean kinetic energy. RMS speed differs from mean speed because squaring weights faster molecules more heavily. Molecular random velocity averages can be zero even when molecular speeds are large.'
],
phases:[
'A heating curve has sloped single-phase regions and idealized flat transition regions at fixed pressure. The sloped regions use $Q=mc\\Delta T$; flat regions use $Q=mL$. A constant heat-input power means duration of a stage is its energy requirement divided by that power.',
'Build an energy budget with thresholds: first the heat needed to reach the melting point, then the heat needed to melt all ice, then any warming of the liquid. If available energy falls between thresholds, stop there and calculate the partial phase mass. A final temperature above zero is impossible while ordinary ice remains in equilibrium with water at ordinary pressure.',
'Evaporation occurs at a liquid surface over a range of temperatures; boiling occurs when equilibrium vapor pressure matches the external pressure so vapor bubbles can grow in the bulk. A sealed liquid–vapor equilibrium is dynamic, with equal evaporation and condensation rates. Changing pressure can change boiling and melting temperatures.'
],
electricity:[
'Charge is quantized in integer multiples of elementary charge magnitude $e\\approx1.602\\times10^{-19}\\,\\mathrm C$. Electrons carry negative charge. An object becoming positive usually means electrons left it, not that extra protons moved through the material. Charge conservation constrains the total of an isolated collection.',
'Charging by induction and polarization are not identical to adding net charge. An isolated neutral conductor can redistribute mobile electrons and stay neutral; leaving it with a net induced charge generally requires a grounding/contact sequence. An insulator can polarize through local charge displacement without free conduction through the whole body.',
'Field lines are a visualization, not physical tracks. Their tangent gives field direction and their density indicates relative strength; they cannot cross at a point with a nonzero well-defined field. A moving positive charge’s acceleration follows the net force, but its trajectory also depends on initial velocity, so its motion need not trace a field line.'
]
};
