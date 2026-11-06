import type {Question} from './course';
// Original authored practice. Existing q1/q2 IDs are never renumbered.
export const expandedQuestions: Question[] = [
  {
    "id": "kinematics-q3",
    "topic": "kinematics",
    "kind": "Concept",
    "prompt": "A student walks $30\\,\\mathrm m$ east, then $40\\,\\mathrm m$ west in $20\\,\\mathrm s$. Find distance, displacement, average speed and average velocity. Take east as positive.",
    "solution": "Definitions: distance is $30+40=70\\,\\mathrm m$; displacement is $30-40=-10\\,\\mathrm m$. Average speed is $70/20=3.50\\,\\mathrm{m/s}$; average velocity is $-10/20=-0.500\\,\\mathrm{m/s}$, westward. Distance and displacement are not interchangeable."
  },
  {
    "id": "kinematics-q4",
    "topic": "kinematics",
    "kind": "Calculation",
    "prompt": "A vector has components $A_x=-6.00\\,\\mathrm m$, $A_y=8.00\\,\\mathrm m$. Find magnitude and direction measured counterclockwise from +x.",
    "solution": "$A=\\sqrt{(-6)^2+8^2}=10.0\\,\\mathrm m$. The vector is in quadrant II. The reference angle is $\\tan^{-1}(8/6)=53.1^\\circ$, so its direction is $180-53.1=126.9^\\circ$. A bare inverse tangent of Ay/Ax without quadrant correction would be misleading."
  },
  {
    "id": "kinematics-q5",
    "topic": "kinematics",
    "kind": "Calculation",
    "prompt": "A vehicle moving at $20.0\\,\\mathrm{m/s}$ brakes uniformly at $-4.00\\,\\mathrm{m/s^2}$. Find stopping time and stopping distance.",
    "solution": "Use constant-acceleration kinematics until $v=0$. $t=(v-v_0)/a=(0-20)/(-4)=5.00\\,\\mathrm s$. $\\Delta x=(v^2-v_0^2)/(2a)=(0-400)/(-8)=50.0\\,\\mathrm m$. Both time and forward travel must be positive."
  },
  {
    "id": "kinematics-q6",
    "topic": "kinematics",
    "kind": "Explain the error",
    "prompt": "A ball is thrown straight up. A solution says: “At the peak its velocity is zero, so its acceleration and net force are zero.” Identify and correct the error. Ignore air drag.",
    "solution": "Zero instantaneous velocity does not imply zero acceleration. At the peak, gravity still acts: $a_y=-g$ and $F_{net,y}=-mg$ for up positive. The velocity changes from positive just before the peak to negative just after it. Only vertical velocity is momentarily zero."
  },
  {
    "id": "kinematics-q7",
    "topic": "kinematics",
    "kind": "Comparison",
    "prompt": "Two balls leave the same height simultaneously, one dropped and one launched horizontally. Ignore drag. Which reaches the level floor first? Which has greater impact speed?",
    "solution": "Both have identical initial vertical velocity zero and identical vertical acceleration, so they arrive simultaneously: $t=\\sqrt{2h/g}$. Their vertical impact speeds are equal, but the horizontally launched ball retains an additional horizontal component. Its total speed $\\sqrt{v_x^2+2gh}$ exceeds the dropped ball’s $\\sqrt{2gh}$."
  },
  {
    "id": "kinematics-q8",
    "topic": "kinematics",
    "kind": "Calculation",
    "prompt": "Launch a projectile at $12.0\\,\\mathrm{m/s}$, $30.0^\\circ$ above horizontal. Find time to peak and maximum height above launch. Use $g=9.81\\,\\mathrm{m/s^2}$, no drag.",
    "solution": "Initial vertical speed is $v_{0y}=12\\sin30^\\circ=6.00\\,\\mathrm{m/s}$. At peak $v_y=0$, so $t_{peak}=6/9.81=0.612\\,\\mathrm s$. From $0=v_{0y}^2-2g\\Delta y$, $\\Delta y=36/(2\\cdot9.81)=1.83\\,\\mathrm m$. Horizontal speed is irrelevant to peak height."
  },
  {
    "id": "kinematics-q9",
    "topic": "kinematics",
    "kind": "Comparison",
    "prompt": "Projectiles launch at the same speed at $25^\\circ$ and $65^\\circ$, landing at launch height without drag. Compare range, flight time and peak height.",
    "solution": "The ranges are equal because $\\sin50^\\circ=\\sin130^\\circ$. The $65^\\circ$ shot has greater vertical initial speed and therefore longer flight time $T=2v_0\\sin\\theta/g$ and greater peak height $v_0^2\\sin^2\\theta/(2g)$. The equal-range conclusion relies on equal endpoint heights."
  },
  {
    "id": "kinematics-q10",
    "topic": "kinematics",
    "kind": "Graph interpretation",
    "prompt": "A rock’s height is fitted by $y(t)=2.00+8.00t-2.00t^2$ with y in meters and t in seconds. Identify initial height, initial vertical velocity and gravitational acceleration magnitude.",
    "solution": "Compare with $y=y_0+v_{0y}t+\\tfrac12a_yt^2$. Thus $y_0=2.00\\,\\mathrm m$, $v_{0y}=+8.00\\,\\mathrm{m/s}$ and $a_y=2(-2.00)=-4.00\\,\\mathrm{m/s^2}$. Gravity magnitude is $g=4.00\\,\\mathrm{m/s^2}$. The coefficient of t² is half the acceleration, not the full acceleration."
  },
  {
    "id": "kinematics-q11",
    "topic": "kinematics",
    "kind": "Multi-stage",
    "prompt": "A ball leaves a $20.0\\,\\mathrm m$ cliff horizontally at $15.0\\,\\mathrm{m/s}$. Find time, range and impact speed. Use $g=9.81$, no drag.",
    "solution": "Vertical fall sets $t=\\sqrt{40/9.81}=2.019\\,\\mathrm s$. Horizontal travel is $x=15t=30.3\\,\\mathrm m$. Vertical impact velocity is $v_y=-gt=-19.81\\,\\mathrm{m/s}$; impact speed is $\\sqrt{15^2+19.81^2}=24.8\\,\\mathrm{m/s}$. Do not use the equal-height range formula."
  },
  {
    "id": "kinematics-q12",
    "topic": "kinematics",
    "kind": "Explain the error",
    "prompt": "A car travels around a circular track at steady speed. A student concludes its average velocity must equal its average speed over one complete lap. Is this correct?",
    "solution": "No. Over a full lap the displacement is zero, so average velocity is zero. Average speed equals the nonzero track length divided by lap time. Instantaneous velocity changes direction throughout the lap, even while speed stays fixed."
  },
  {
    "id": "forces-q3",
    "topic": "forces",
    "kind": "Calculation",
    "prompt": "A $3.00\\,\\mathrm{kg}$ block rests on a level table with $\\mu_s=0.400$. A horizontal $8.00\\,\\mathrm N$ force is applied. Find static friction and acceleration. Use $g=9.81$.",
    "solution": "$N=mg=29.43\\,\\mathrm N$ and $f_{s,max}=0.400(29.43)=11.77\\,\\mathrm N$. Only $8.00\\,\\mathrm N$ is required to balance the pull, below the limit. Static friction is $8.00\\,\\mathrm N$ opposite the pull, and acceleration is zero."
  },
  {
    "id": "forces-q4",
    "topic": "forces",
    "kind": "Calculation",
    "prompt": "A $4.00\\,\\mathrm{kg}$ block slides on a horizontal surface with $\\mu_k=0.250$ while pulled horizontally by $15.0\\,\\mathrm N$. Find acceleration. Use $g=9.81$.",
    "solution": "$N=mg=39.24\\,\\mathrm N$. Sliding friction $f_k=9.81\\,\\mathrm N$ opposes motion. Assuming motion is in the pull direction, $a=(15.0-9.81)/4.00=1.30\\,\\mathrm{m/s^2}$ in that direction."
  },
  {
    "id": "forces-q5",
    "topic": "forces",
    "kind": "Calculation",
    "prompt": "A $60.0\\,\\mathrm{kg}$ person stands on a scale in an elevator accelerating upward at $2.00\\,\\mathrm{m/s^2}$. What force does the scale read? Use $g=9.81$.",
    "solution": "With up positive, $N-mg=ma$. Thus $N=m(g+a)=60.0(9.81+2.00)=709\\,\\mathrm N$ (three significant figures). The scale reads normal force, not automatically weight."
  },
  {
    "id": "forces-q6",
    "topic": "forces",
    "kind": "Calculation",
    "prompt": "A block slides down a frictionless $30.0^\\circ$ incline. Find its acceleration and normal force per unit mass. Use $g=9.81$.",
    "solution": "Choose axes along/perpendicular to incline. Along: $ma=mg\\sin30^\\circ$, so $a=4.91\\,\\mathrm{m/s^2}$ downhill. Perpendicular: $N=mg\\cos30^\\circ$, so $N/m=8.50\\,\\mathrm{N/kg}$. The normal force does not balance the entire weight vector."
  },
  {
    "id": "forces-q7",
    "topic": "forces",
    "kind": "Concept",
    "prompt": "A book rests on a table. Are the upward table force on the book and the downward Earth force on the book a Newton’s third-law pair? Name the partner of each.",
    "solution": "No: both act on the book, so they are not a third-law pair. The partner of the table’s force on the book is the book’s force on the table. The partner of Earth’s gravitational force on the book is the book’s gravitational force on Earth. Equilibrium and third-law pairing are different ideas."
  },
  {
    "id": "forces-q8",
    "topic": "forces",
    "kind": "Calculation",
    "prompt": "A spring with $k=150\\,\\mathrm{N/m}$ is compressed to $x=-0.0400\\,\\mathrm m$. Find the signed spring force along x.",
    "solution": "Hooke’s law: $F_x=-kx=-150(-0.0400)=+6.00\\,\\mathrm N$. A negative displacement produces a positive restoring force. The spring pushes toward equilibrium."
  },
  {
    "id": "forces-q9",
    "topic": "forces",
    "kind": "Comparison",
    "prompt": "Two identical blocks slide at constant speed. One is pulled horizontally; the other is pulled upward at an angle. For the same horizontal pull component, which has less friction? Assume both maintain contact and share the same kinetic coefficient.",
    "solution": "The angled pull reduces normal force: $N=mg-F_y$, whereas the horizontal pull gives $N=mg$. Thus its kinetic friction $\\mu_kN$ is smaller. However, the stated steady-speed condition would require each horizontal pull component to equal its own friction: identical horizontal components cannot both sustain steady sliding under these different normal forces. The assumptions are inconsistent unless the upward component is zero (or the friction coefficient is zero)."
  },
  {
    "id": "forces-q10",
    "topic": "forces",
    "kind": "Explain the error",
    "prompt": "A free-body diagram of a sled includes weight, normal force, applied pull, friction and “the sled’s force on the ground.” Which entry must be removed, and why?",
    "solution": "Remove the sled’s force on the ground. A free-body diagram contains only forces acting on the isolated sled. That reaction belongs on the ground’s diagram. Including it could incorrectly cancel the normal force."
  },
  {
    "id": "forces-q11",
    "topic": "forces",
    "kind": "Multi-stage",
    "prompt": "A $2.00\\,\\mathrm{kg}$ block slides down a $30.0^\\circ$ incline with $\\mu_k=0.200$. Find normal force and downhill acceleration. Use $g=9.81$.",
    "solution": "$N=mg\\cos30^\\circ=16.99\\,\\mathrm N$, $f_k=0.200N=3.398\\,\\mathrm N$ uphill. Along slope, $ma=mg\\sin30^\\circ-f_k=9.81-3.398$. Thus $a=3.21\\,\\mathrm{m/s^2}$ downhill. Friction is based on N, not on mg."
  },
  {
    "id": "forces-q12",
    "topic": "forces",
    "kind": "Concept",
    "prompt": "A passenger in an elevator is moving upward but slowing down. Is the normal force on the passenger greater than, equal to or less than weight? Explain.",
    "solution": "Slowing while moving upward means downward acceleration. With upward positive, $N-mg=ma_y<0$. Hence $N<mg$ while contact is maintained. The velocity direction alone cannot determine the force imbalance."
  },
  {
    "id": "energy-q3",
    "topic": "energy",
    "kind": "Calculation",
    "prompt": "A $25.0\\,\\mathrm N$ force acts $60.0^\\circ$ to a $4.00\\,\\mathrm m$ displacement. Find its work.",
    "solution": "$W=Fd\\cos\\theta=25.0(4.00)\\cos60^\\circ=50.0\\,\\mathrm J$. The perpendicular component contributes no work."
  },
  {
    "id": "energy-q4",
    "topic": "energy",
    "kind": "Concept",
    "prompt": "Does the tension in an ideal string do work on an object in uniform circular motion about a fixed center? Explain using a formula.",
    "solution": "No. Tension is radial while instantaneous displacement and velocity are tangential. Thus $dW=\\vec F\\cdot d\\vec r=0$ and instantaneous power $\\vec F\\cdot\\vec v=0$. Tension changes velocity direction but not speed in this setup."
  },
  {
    "id": "energy-q5",
    "topic": "energy",
    "kind": "Calculation",
    "prompt": "A $5.00\\,\\mathrm{kg}$ crate slides $6.00\\,\\mathrm m$ on a level floor with $\\mu_k=0.100$. Find work done by friction. Use $g=9.81$.",
    "solution": "$f_k=\\mu_kmg=4.905\\,\\mathrm N$. Friction is opposite displacement, so $W_f=-f_kd=-4.905(6.00)=-29.4\\,\\mathrm J$. The negative sign refers to mechanical energy removed from the crate."
  },
  {
    "id": "energy-q6",
    "topic": "energy",
    "kind": "Calculation",
    "prompt": "An engine supplies $2.00\\,\\mathrm{kW}$ at a steady speed of $10.0\\,\\mathrm{m/s}$. Find its force along the motion.",
    "solution": "Convert $2.00\\,\\mathrm{kW}=2000\\,\\mathrm W$. With force parallel to velocity, $P=Fv$, so $F=P/v=200\\,\\mathrm N$. At steady speed this driving force balances the resistive force."
  },
  {
    "id": "energy-q7",
    "topic": "energy",
    "kind": "Comparison",
    "prompt": "Two equal-mass objects have speeds v and 3v. Compare their kinetic energies and their stopping distances under equal constant braking-force magnitudes.",
    "solution": "Kinetic energy scales as speed squared, so the ratio is 1:9. Work-energy gives $Fd=K_i$ for stopping under constant braking force. Therefore their stopping distances also have ratio 1:9. Their momentum ratio would only be 1:3."
  },
  {
    "id": "energy-q8",
    "topic": "energy",
    "kind": "Explain the error",
    "prompt": "A solution to a rough downhill motion says “Energy is conserved, therefore K + U must stay constant.” What distinction is missing?",
    "solution": "Total energy is conserved, but mechanical energy can transfer to thermal energy. For the object’s mechanical energy, $K_f+U_f=K_i+U_i+W_{nc}$, with negative friction work. Alternatively include thermal energy explicitly in the total system balance. Do not set Wnc to zero on a rough path."
  },
  {
    "id": "energy-q9",
    "topic": "energy",
    "kind": "Calculation",
    "prompt": "A $0.500\\,\\mathrm{kg}$ ball is launched upward at $8.00\\,\\mathrm{m/s}$. Using energy, find maximum rise above launch. Ignore air drag; use $g=9.81$.",
    "solution": "At the peak, vertical speed and kinetic energy are zero. $\\tfrac12mv_0^2=mg\\Delta y$, so $\\Delta y=v_0^2/(2g)=64/19.62=3.26\\,\\mathrm m$. Mass cancels. This is for straight-up launch, not total speed at the peak of an angled projectile."
  },
  {
    "id": "energy-q10",
    "topic": "energy",
    "kind": "Multi-stage",
    "prompt": "A $2.00\\,\\mathrm{kg}$ sled starts from rest, descends a frictionless height of $3.00\\,\\mathrm m$, then stops on a level surface with $\\mu_k=0.250$. Find its entry speed and rough-surface stopping distance. Use $g=9.81$.",
    "solution": "First stage: $mgh=\\tfrac12mv^2$, so $v=\\sqrt{2gh}=7.67\\,\\mathrm{m/s}$. Second stage: $\\mu_kmgd=\\tfrac12mv^2=mgh$. Thus $d=h/\\mu_k=12.0\\,\\mathrm m$. Energy is mechanical during descent and dissipated on the rough section."
  },
  {
    "id": "energy-q11",
    "topic": "energy",
    "kind": "Calculation",
    "prompt": "A $1.00\\,\\mathrm{kg}$ ice block at zero Celsius loses $167\\,\\mathrm J$ of kinetic energy to friction. If all of it melts a small portion already at zero Celsius, find melted mass. Use $L_f=3.34\\times10^5\\,\\mathrm{J/kg}$.",
    "solution": "The portion needs no warming stage, only latent heat. $m_{melt}=Q/L_f=167/(3.34\\times10^5)=5.00\\times10^{-4}\\,\\mathrm{kg}=0.500\\,\\mathrm g$. The entire block mass is not the melted mass."
  },
  {
    "id": "energy-q12",
    "topic": "energy",
    "kind": "Graph interpretation",
    "prompt": "A force-position graph is a straight line from $F_x=0$ at $x=0$ to $F_x=10.0\\,\\mathrm N$ at $x=4.00\\,\\mathrm m$. Find work and the final speed of a $2.00\\,\\mathrm{kg}$ cart starting from rest, with this as its only net work.",
    "solution": "Work is the area under the graph: a triangle, $W=\\tfrac12(4.00)(10.0)=20.0\\,\\mathrm J$. Work-energy gives $\\tfrac12mv^2=20.0$, so $v=\\sqrt{20.0}=4.47\\,\\mathrm{m/s}$. Using the endpoint force times the entire distance would overcount work by a factor of two."
  },
  {
    "id": "momentum-q3",
    "topic": "momentum",
    "kind": "Calculation",
    "prompt": "A $3.00\\,\\mathrm{kg}$ cart at $+4.00\\,\\mathrm{m/s}$ sticks to a $1.00\\,\\mathrm{kg}$ cart at $-2.00\\,\\mathrm{m/s}$. Find their final velocity, neglecting external horizontal impulse.",
    "solution": "Signed momentum: $p_i=3(4)+1(-2)=10.0\\,\\mathrm{kg\\,m/s}$. Common final mass is 4.00 kg, so $v_f=10.0/4.00=+2.50\\,\\mathrm{m/s}$. Adding the two initial speed magnitudes would give the wrong answer."
  },
  {
    "id": "momentum-q4",
    "topic": "momentum",
    "kind": "Calculation",
    "prompt": "A $0.150\\,\\mathrm{kg}$ ball hits a wall at $+20.0\\,\\mathrm{m/s}$ and rebounds at $-15.0\\,\\mathrm{m/s}$. Find impulse on the ball.",
    "solution": "$J=\\Delta p=m(v_f-v_i)=0.150(-15.0-20.0)=-5.25\\,\\mathrm{N\\,s}$. Reversal means the velocity change magnitude is 35.0 m/s, not 5.0 m/s."
  },
  {
    "id": "momentum-q5",
    "topic": "momentum",
    "kind": "Comparison",
    "prompt": "Two identical balls with equal initial velocity are brought to rest. One stops in 0.010 s and the other in 0.050 s. Compare impulse and average stopping-force magnitude.",
    "solution": "Impulses are equal because the initial and final momenta are identical. Since $|F_{avg}|=|\\Delta p|/\\Delta t$, the longer stop has one fifth the average force. A reduced average force does not imply a smaller momentum change."
  },
  {
    "id": "momentum-q6",
    "topic": "momentum",
    "kind": "Concept",
    "prompt": "Two equal-mass carts collide elastically in one dimension. One initially moves at u and the other is stationary. What happens to their velocities, and what conservation laws are required?",
    "solution": "In a nontrivial 1D elastic collision of equal masses, they exchange velocities: the incoming cart stops, the initially stationary cart moves at u. Momentum and kinetic energy are both conserved. Momentum alone would not uniquely determine the two final velocities."
  },
  {
    "id": "momentum-q7",
    "topic": "momentum",
    "kind": "Explain the error",
    "prompt": "A bullet embeds in a block. A student calculates their speed by setting the bullet’s initial kinetic energy equal to the final kinetic energy of bullet plus block. Why is this invalid?",
    "solution": "Embedding is perfectly inelastic, so some kinetic energy becomes deformation, heat and sound. During a brief collision with negligible external impulse, conserve momentum: $mu=(M+m)v$. Mechanical energy cannot be conserved across the impact."
  },
  {
    "id": "momentum-q8",
    "topic": "momentum",
    "kind": "Graph interpretation",
    "prompt": "A net force-time pulse is triangular: zero force at t = 0, peak $100\\,\\mathrm N$ at t = 0.0200 s, zero at t = 0.0400 s. Find impulse and the velocity change of a 0.500 kg object.",
    "solution": "Impulse equals area under force-time graph: $J=\\tfrac12(0.0400)(100)=2.00\\,\\mathrm{N\\,s}$. $\\Delta v=J/m=2.00/0.500=4.00\\,\\mathrm{m/s}$ in the pulse direction. The peak force is not the average force."
  },
  {
    "id": "momentum-q9",
    "topic": "momentum",
    "kind": "Multi-stage",
    "prompt": "A $0.0100\\,\\mathrm{kg}$ bullet at $200\\,\\mathrm{m/s}$ sticks in a stationary $0.990\\,\\mathrm{kg}$ suspended block. Find combined speed and maximum rise. Neglect losses after impact; use $g=9.81$.",
    "solution": "Collision: $v=mu/(M+m)=0.0100(200)/1.000=2.00\\,\\mathrm{m/s}$. Rise: $\\tfrac12(M+m)v^2=(M+m)gh$, giving $h=v^2/(2g)=0.204\\,\\mathrm m$. Momentum applies during impact; mechanical energy applies during the subsequent swing."
  },
  {
    "id": "momentum-q10",
    "topic": "momentum",
    "kind": "Multi-stage",
    "prompt": "A $0.0200\\,\\mathrm{kg}$ bullet at $250\\,\\mathrm{m/s}$ embeds in a stationary $0.980\\,\\mathrm{kg}$ block at the edge of a $0.800\\,\\mathrm m$ table. Find horizontal range after impact. Use $g=9.81$, no drag.",
    "solution": "Collision speed: $v=0.0200(250)/(0.980+0.0200)=5.00\\,\\mathrm{m/s}$. Flight time: $t=\\sqrt{2(0.800)/9.81}=0.4039\\,\\mathrm s$. Range: $x=vt=2.02\\,\\mathrm m$. The original bullet speed is not the launch speed of the block."
  },
  {
    "id": "momentum-q11",
    "topic": "momentum",
    "kind": "Calculation",
    "prompt": "A 2.00 kg cart moving at 3.00 m/s sticks to a stationary 1.00 kg cart. Find how much kinetic energy is lost.",
    "solution": "Momentum gives $v_f=2(3)/(2+1)=2.00\\,\\mathrm{m/s}$. Initial kinetic energy is $K_i=\\tfrac12(2)(3^2)=9.00\\,\\mathrm J$; final is $K_f=\\tfrac12(3)(2^2)=6.00\\,\\mathrm J$. Loss is $3.00\\,\\mathrm J$, or one third of the initial kinetic energy."
  },
  {
    "id": "momentum-q12",
    "topic": "momentum",
    "kind": "Concept",
    "prompt": "Two initially stationary skaters push apart on frictionless ice. Skater A has mass 50.0 kg and moves at +3.00 m/s; B has mass 75.0 kg. Find B’s velocity and explain where the new kinetic energy comes from.",
    "solution": "With negligible external horizontal impulse, $0=50(3)+75v_B$, so $v_B=-2.00\\,\\mathrm{m/s}$. Total momentum remains zero, while kinetic energy increases using internal chemical energy from the skaters. Momentum conservation does not require kinetic-energy conservation."
  },
  {
    "id": "rotation-q3",
    "topic": "rotation",
    "kind": "Calculation",
    "prompt": "A car rounds a flat curve of radius 40.0 m at 12.0 m/s. Find the minimum static friction coefficient needed. Use $g=9.81$.",
    "solution": "Friction must supply $mv^2/r$, while $f_s\\leq\\mu_smg$. At the limit, $\\mu_{s,min}=v^2/(rg)=144/(40\\cdot9.81)=0.367$. This is a minimum coefficient, not the actual friction ratio for every road condition."
  },
  {
    "id": "rotation-q4",
    "topic": "rotation",
    "kind": "Calculation",
    "prompt": "A frictionless banked road has radius 60.0 m and banking angle 20.0°. Find design speed. Use $g=9.81$.",
    "solution": "$\\tan\\theta=v^2/(rg)$ gives $v=\\sqrt{rg\\tan\\theta}=\\sqrt{60(9.81)\\tan20^\\circ}=14.6\\,\\mathrm{m/s}$. Vertical normal component balances weight; horizontal component provides centripetal acceleration."
  },
  {
    "id": "rotation-q5",
    "topic": "rotation",
    "kind": "Comparison",
    "prompt": "Two points lie at radii r and 2r on a rigid rotating disk. Compare angular speed, linear speed and centripetal acceleration.",
    "solution": "Rigid rotation gives equal angular speed. Since $v=\\omega r$, the outer point’s linear speed is twice as large. Since $a_c=\\omega^2r$, its centripetal acceleration is also twice as large. For a fixed radius, doubling speed would quadruple centripetal acceleration; that is a different comparison."
  },
  {
    "id": "rotation-q6",
    "topic": "rotation",
    "kind": "Explain the error",
    "prompt": "A free-body diagram of a turning car shows weight, normal force, friction and an additional inward “centripetal force.” What is wrong?",
    "solution": "Centripetal force is a name for the required net inward component of the real forces, not an extra interaction. On a level turn, static friction provides that inward net force. Remove the extra arrow and use $f_s=mv^2/r$, with $f_s\\leq\\mu_sN$."
  },
  {
    "id": "rotation-q7",
    "topic": "rotation",
    "kind": "Calculation",
    "prompt": "A 0.500 kg object at the top of a vertical circle of radius 1.20 m moves at 4.00 m/s. Find inward normal force. Use $g=9.81$.",
    "solution": "At top, inward is downward: $mg+N=mv^2/r$. Therefore $N=m(v^2/r-g)=0.500(16/1.20-9.81)=1.76\\,\\mathrm N$ inward. It is positive, so this speed exceeds the contact threshold."
  },
  {
    "id": "rotation-q8",
    "topic": "rotation",
    "kind": "Calculation",
    "prompt": "An object has centripetal acceleration $12.0\\,\\mathrm{m/s^2}$ and tangential acceleration $5.00\\,\\mathrm{m/s^2}$. Find total acceleration magnitude and its angle away from the inward radial direction.",
    "solution": "The components are perpendicular. $a=\\sqrt{12^2+5^2}=13.0\\,\\mathrm{m/s^2}$. Angle away from inward radius toward the tangential acceleration is $\\phi=\\tan^{-1}(5/12)=22.6^\\circ$. Adding 12 and 5 directly would be incorrect."
  },
  {
    "id": "rotation-q9",
    "topic": "rotation",
    "kind": "Calculation",
    "prompt": "A 15.0 N force acts perpendicular to a wrench 0.250 m from the bolt. Find torque. What if its line of action passes through the bolt?",
    "solution": "Perpendicular force: $\\tau=rF=0.250(15.0)=3.75\\,\\mathrm{N\\,m}$. If the line passes through the bolt, the perpendicular lever arm is zero and torque is zero. Force magnitude alone does not determine torque."
  },
  {
    "id": "rotation-q10",
    "topic": "rotation",
    "kind": "Concept",
    "prompt": "About the floor-contact point of a spool, a pulling force’s line of action passes exactly through that point. What can you conclude without the full diagram?",
    "solution": "That force produces zero torque about the contact point, since its moment arm is zero. This alone does not establish the complete motion or a left/right rolling direction: other forces, their torques and the rolling/no-slip conditions must be considered. A missing force-direction diagram cannot be reconstructed from this statement alone."
  },
  {
    "id": "rotation-q11",
    "topic": "rotation",
    "kind": "Calculation",
    "prompt": "A centrifuge turns at 300 rpm. Find angular speed, linear speed and centripetal acceleration at radius 0.200 m.",
    "solution": "$\\omega=300(2\\pi)/60=10\\pi=31.4\\,\\mathrm{rad/s}$. $v=\\omega r=6.28\\,\\mathrm{m/s}$. $a_c=\\omega^2r=197\\,\\mathrm{m/s^2}$. The rpm value must be converted before it is used in v = ωr."
  },
  {
    "id": "rotation-q12",
    "topic": "rotation",
    "kind": "Comparison",
    "prompt": "A flat turn permits 20.0 m/s on Earth. With the same radius and static friction coefficient on a body where gravity is one quarter of Earth’s, what is the maximum speed?",
    "solution": "$v_{max}=\\sqrt{\\mu_sgr}$, so $v_{new}/v_E=\\sqrt{g_{new}/g_E}=\\sqrt{1/4}=1/2$. The new maximum is $10.0\\,\\mathrm{m/s}$. Lower gravity reduces normal force and available friction."
  },
  {
    "id": "heat-q3",
    "topic": "heat",
    "kind": "Calculation",
    "prompt": "Convert $25.0^\\circ\\mathrm C$ to kelvin. If it warms to $35.0^\\circ\\mathrm C$, what is ΔT in kelvin?",
    "solution": "$T_i=25.0+273.15=298.15\\,\\mathrm K$ (298.2 K to one decimal). $T_f=308.15\\,\\mathrm K$, so $\\Delta T=10.0\\,\\mathrm K$. Do not add 273.15 to a temperature difference."
  },
  {
    "id": "heat-q4",
    "topic": "heat",
    "kind": "Calculation",
    "prompt": "A 0.200 kg metal sample cools from 80.0 to 30.0 °C, releasing 4500 J. Find its specific heat capacity.",
    "solution": "For the metal, $Q=-4500\\,\\mathrm J$ and $\\Delta T=-50.0\\,\\mathrm K$. Thus $c=Q/(m\\Delta T)=(-4500)/(0.200(-50.0))=450\\,\\mathrm{J/(kg\\,K)}$. A negative heat transfer does not imply negative specific heat."
  },
  {
    "id": "heat-q5",
    "topic": "heat",
    "kind": "Calculation",
    "prompt": "Mix 0.100 kg water at 80.0 °C with 0.300 kg water at 20.0 °C in an insulated negligible-heat-capacity container. Find final temperature.",
    "solution": "Both samples have the same c and remain liquid: $0.100c(T_f-80)+0.300c(T_f-20)=0$. Cancel c and solve $0.400T_f=14.0$, giving $T_f=35.0^\\circ\\mathrm C$. The result is nearer the cooler sample because its mass is larger."
  },
  {
    "id": "heat-q6",
    "topic": "heat",
    "kind": "Comparison",
    "prompt": "Two rods have the same material, end temperatures and length. Rod B has twice the diameter of rod A. Compare steady heat currents.",
    "solution": "Conduction current is $I_Q=kA\\Delta T/L$. Area is proportional to diameter squared, so B has four times the area and four times the current. Doubling diameter is not the same as doubling area."
  },
  {
    "id": "heat-q7",
    "topic": "heat",
    "kind": "Calculation",
    "prompt": "A window has $k=0.800\\,\\mathrm{W/(m\\,K)}$, area 2.00 m², thickness 0.00500 m, and temperature difference 15.0 K. Find idealized steady conduction power.",
    "solution": "$P=kA\\Delta T/L=0.800(2.00)(15.0)/0.00500=4800\\,\\mathrm W=4.80\\,\\mathrm{kW}$. This idealized slab model neglects surface air-film resistance and other real-window effects."
  },
  {
    "id": "heat-q8",
    "topic": "heat",
    "kind": "Concept",
    "prompt": "Identify the dominant named mechanism in each description: energy arriving from the Sun through vacuum; circulating warm water; energy conducted along a solid metal handle.",
    "solution": "Sun through vacuum: radiation, which requires no material medium. Circulating water: convection, involving bulk fluid motion. Along a solid handle: conduction through material. Real situations can involve more than one mechanism, but each description identifies one specifically."
  },
  {
    "id": "heat-q9",
    "topic": "heat",
    "kind": "Comparison",
    "prompt": "Two identical radiating objects have the same area and emissivity in effectively zero-temperature surroundings. Their temperatures are 300 K and 600 K. Compare emitted power. Would the same ratio necessarily hold for net power in a 290 K room?",
    "solution": "With negligible background, $P\\propto T^4$, so the 600 K object emits 16 times as much. In a 290 K room, net powers scale as $T^4-290^4$, not just T⁴. Their net-power ratio is not 16 because both lose the same background subtraction before the ratio is taken."
  },
  {
    "id": "heat-q10",
    "topic": "heat",
    "kind": "Explain the error",
    "prompt": "A student calculates net radiation from skin at 34 °C in a room at 20 °C using $34^4-20^4$. Explain and correct the setup.",
    "solution": "The Stefan–Boltzmann law requires absolute temperature: $T=307.15\\,\\mathrm K$ and $T_s=293.15\\,\\mathrm K$. Correct net power is $e\\sigma A(307.15^4-293.15^4)$. Without emissivity and area, no unique numerical power follows. A temperature difference in Celsius is valid for sensible heat, not for fourth powers of absolute temperatures."
  },
  {
    "id": "heat-q11",
    "topic": "heat",
    "kind": "Multi-stage",
    "prompt": "Add 0.100 kg of ice at −10.0 °C to 0.500 kg of water at 0 °C in an isolated container. Use $c_i=2100\\,\\mathrm{J/(kg\\,K)}$ and $L_f=334000\\,\\mathrm{J/kg}$. Find mass of water that freezes and final ice mass.",
    "solution": "Ice warming needs $Q=0.100(2100)(10)=2100\\,\\mathrm J$. Water freezing at zero releases this heat: $m_f=2100/334000=0.00629\\,\\mathrm{kg}$. Final ice mass is $0.106\\,\\mathrm{kg}$ to three significant figures. Since much liquid remains, final temperature is 0 °C. It is freezing, not melting, that supplies the warming energy."
  },
  {
    "id": "heat-q12",
    "topic": "heat",
    "kind": "Concept",
    "prompt": "An object and its surroundings are both at 300 K. Is the object emitting radiation? What is its net radiative power in the gray-surface model?",
    "solution": "It emits radiation with power $e\\sigma AT^4$ and absorbs equal power from the surroundings. Therefore net radiative power is $e\\sigma A(T^4-T_s^4)=0$. Zero net transfer does not mean microscopic energy exchange has stopped."
  },
  {
    "id": "gases-q3",
    "topic": "gases",
    "kind": "Calculation",
    "prompt": "A fixed amount of gas at constant temperature is compressed from 3.00 L to 1.20 L. Initial absolute pressure is 80.0 kPa. Find final pressure.",
    "solution": "Boyle’s law gives $P_1V_1=P_2V_2$. Thus $P_2=80.0(3.00/1.20)=200\\,\\mathrm{kPa}$. Liters cancel because both volumes use the same unit."
  },
  {
    "id": "gases-q4",
    "topic": "gases",
    "kind": "Calculation",
    "prompt": "A rigid sealed gas container has pressure 100 kPa at 27.0 °C. Find pressure at 127.0 °C.",
    "solution": "Convert absolute temperatures: $T_1=300.15\\,\\mathrm K$, $T_2=400.15\\,\\mathrm K$. At fixed volume and amount, $P_2=P_1T_2/T_1=100(400.15/300.15)=133\\,\\mathrm{kPa}$. Using the Celsius ratio would be wrong."
  },
  {
    "id": "gases-q5",
    "topic": "gases",
    "kind": "Calculation",
    "prompt": "Find the number of moles in 0.0100 m³ of gas at 2.00 × 10⁵ Pa and 300 K. Use $R=8.314\\,\\mathrm{J/(mol\\,K)}$.",
    "solution": "$n=PV/(RT)=(2.00\\times10^5)(0.0100)/(8.314\\cdot300)=0.802\\,\\mathrm{mol}$. Use absolute pressure and volume in m³ with this SI gas constant."
  },
  {
    "id": "gases-q6",
    "topic": "gases",
    "kind": "Comparison",
    "prompt": "Oxygen and helium gases are at the same temperature. Their molar masses are 32.0 g/mol and 4.00 g/mol. Compare mean translational kinetic energy and RMS speeds.",
    "solution": "Mean translational kinetic energy per molecule is $3k_BT/2$, identical for both. RMS speed scales as $1/\\sqrt M$, so $v_{He}/v_{O_2}=\\sqrt{32/4}=\\sqrt8=2.83$. Equal temperature does not mean equal molecular speeds."
  },
  {
    "id": "gases-q7",
    "topic": "gases",
    "kind": "Concept",
    "prompt": "A basketball is pumped with extra air while its volume and temperature remain approximately fixed. Which variable changes, and why is Boyle’s fixed-amount law not the right direct description?",
    "solution": "Pressure rises as molecule count increases: $P=Nk_BT/V$. Boyle’s law assumes fixed amount as well as fixed temperature. Pumping changes N, so treating PV as unchanged would be invalid."
  },
  {
    "id": "gases-q8",
    "topic": "gases",
    "kind": "Explain the error",
    "prompt": "A student inserts a molar mass of 28.0 directly into $v_{rms}=\\sqrt{3RT/M}$ with SI R and T. What unit conversion is missing, and how does the mistake affect speed?",
    "solution": "Convert $28.0\\,\\mathrm{g/mol}=0.0280\\,\\mathrm{kg/mol}$. Using 28.0 makes the denominator 1000 times too large, so the computed speed is too small by $\\sqrt{1000}\\approx31.6$. Always match units to the gas constant."
  },
  {
    "id": "gases-q9",
    "topic": "gases",
    "kind": "Calculation",
    "prompt": "For a monatomic ideal gas with n = 0.500 mol, find internal-energy change on warming from 300 to 400 K. Use R = 8.314 in SI.",
    "solution": "$\\Delta U=\\tfrac32nR\\Delta T=\\tfrac32(0.500)(8.314)(100)=624\\,\\mathrm J$. This energy change depends on temperature change, not on whether the heating was at fixed volume or pressure; the heat and work separately may differ."
  },
  {
    "id": "gases-q10",
    "topic": "gases",
    "kind": "Comparison",
    "prompt": "A gas has its Kelvin temperature tripled and molecule number doubled at fixed volume. By what factor does pressure change? By what factor does RMS speed change for the same gas species?",
    "solution": "From $P=Nk_BT/V$, pressure increases by $2\\times3=6$. RMS speed depends on temperature and molecular mass, not directly on molecule count: $v_{rms,new}/v_{rms,old}=\\sqrt3=1.73$."
  },
  {
    "id": "gases-q11",
    "topic": "gases",
    "kind": "Concept",
    "prompt": "Why can water evaporate below its boiling point, and why can this cool the remaining liquid?",
    "solution": "Molecules have a distribution of energies. Some surface molecules have enough energy to escape even below the boiling point. Preferential escape of higher-energy molecules lowers the average energy of the remaining liquid unless energy is replaced from the surroundings. The RMS speed is not a common speed of every molecule."
  },
  {
    "id": "gases-q12",
    "topic": "gases",
    "kind": "Multi-stage",
    "prompt": "A fixed gas sample changes from P₁ = 100 kPa, V₁ = 2.00 L, T₁ = 300 K to V₂ = 1.00 L, T₂ = 450 K. Find P₂ and explain both factors driving the change.",
    "solution": "Combined gas law: $P_2=P_1(V_1/V_2)(T_2/T_1)=100(2)(1.5)=300\\,\\mathrm{kPa}$. Compression doubles pressure at fixed temperature, and the higher absolute temperature multiplies it by another 1.5. Gas amount remains fixed."
  },
  {
    "id": "phases-q3",
    "topic": "phases",
    "kind": "Calculation",
    "prompt": "How much heat warms 0.200 kg of ice from −20.0 to 0 °C, without melting? Use $c_i=2100\\,\\mathrm{J/(kg\\,K)}$.",
    "solution": "This is a single-phase temperature change: $Q=mc_i\\Delta T=0.200(2100)(20.0)=8400\\,\\mathrm J=8.40\\,\\mathrm{kJ}$. Do not add latent heat because melting is explicitly excluded."
  },
  {
    "id": "phases-q4",
    "topic": "phases",
    "kind": "Calculation",
    "prompt": "How much heat is released when 0.0500 kg of water at zero Celsius freezes? Use $L_f=334000\\,\\mathrm{J/kg}$.",
    "solution": "Released energy magnitude is $mL_f=0.0500(334000)=16700\\,\\mathrm J$. Heat into the freezing water is $Q=-16.7\\,\\mathrm{kJ}$; the surroundings gain $+16.7\\,\\mathrm{kJ}$. Temperature is unchanged during freezing."
  },
  {
    "id": "phases-q5",
    "topic": "phases",
    "kind": "Multi-stage",
    "prompt": "Convert 0.100 kg ice at −5.00 °C into water at 10.0 °C. Use $c_i=2100$, $c_w=4186$, $L_f=334000$ in SI. Find total heat.",
    "solution": "Stage 1 warms ice: $Q_1=0.100(2100)(5)=1050\\,\\mathrm J$. Stage 2 melts: $Q_2=33400\\,\\mathrm J$. Stage 3 warms water: $Q_3=0.100(4186)(10)=4186\\,\\mathrm J$. Total is $38636\\,\\mathrm J=38.6\\,\\mathrm{kJ}$ to three significant figures."
  },
  {
    "id": "phases-q6",
    "topic": "phases",
    "kind": "Multi-stage",
    "prompt": "Supply 1000 J to 0.100 kg of ice initially at −10.0 °C. Find its final temperature and whether any melts. Use $c_i=2100\\,\\mathrm{J/(kg\\,K)}$, no losses.",
    "solution": "Reaching zero requires $0.100(2100)(10)=2100\\,\\mathrm J$, more than available. Thus there is no melting. The temperature rise is $\\Delta T=1000/(0.100\\cdot2100)=4.76\\,\\mathrm K$, so $T_f=-5.24^\\circ\\mathrm C$. Always check the first stage before assigning latent heat."
  },
  {
    "id": "phases-q7",
    "topic": "phases",
    "kind": "Multi-stage",
    "prompt": "Supply 5000 J to 0.100 kg of ice initially at −10.0 °C. Find the final phase masses and temperature. Use $c_i=2100$, $L_f=334000$ in SI, no losses.",
    "solution": "Warming to zero uses 2100 J, leaving 2900 J. Melted mass is $2900/334000=0.00868\\,\\mathrm{kg}$. Remaining ice is $0.100-0.00868=0.0913\\,\\mathrm{kg}$. Both phases coexist at $0^\\circ\\mathrm C$; there is no energy left to warm liquid above zero."
  },
  {
    "id": "phases-q8",
    "topic": "phases",
    "kind": "Concept",
    "prompt": "At a fixed pressure, a pure material is melting while heat is steadily supplied. Does its temperature necessarily rise? Where does the added energy go?",
    "solution": "During an ideal equilibrium melting interval, temperature remains at the melting point while both phases coexist. Added energy changes the phase fraction and molecular arrangement rather than raising temperature. Only after the transition completes does further heat raise the liquid temperature under the single-phase model."
  },
  {
    "id": "phases-q9",
    "topic": "phases",
    "kind": "Concept",
    "prompt": "Distinguish a triple point from a critical point on a phase diagram.",
    "solution": "The triple point is the temperature/pressure condition where solid, liquid and gas coexist in equilibrium. The critical point is the endpoint of the liquid–gas coexistence boundary; above it there is no sharp liquid/gas distinction. The critical point is not a three-phase coexistence point."
  },
  {
    "id": "phases-q10",
    "topic": "phases",
    "kind": "Explain the error",
    "prompt": "A student says evaporation stops in a sealed container when liquid and vapor reach equilibrium. Correct this statement.",
    "solution": "Evaporation and condensation continue at equal rates: this is dynamic equilibrium. The amount of vapor is steady on average, not the microscopic transfers. At a given temperature the equilibrium vapor pressure is set by the substance and temperature while both phases remain."
  },
  {
    "id": "phases-q11",
    "topic": "phases",
    "kind": "Comparison",
    "prompt": "Ordinary ice is less dense than liquid water near melting. If pressure increases, which phase is favored and how does this relate to the unusual solid–liquid line in water’s phase diagram?",
    "solution": "Higher pressure favors the denser liquid over ordinary ice. Near ordinary melting conditions, increasing pressure lowers the melting temperature, giving the solid–liquid boundary a negative slope. This ordinary-ice behavior is not a claim about every high-pressure ice phase."
  },
  {
    "id": "phases-q12",
    "topic": "phases",
    "kind": "Concept",
    "prompt": "An ice-water mixture at zero Celsius receives less energy than needed to melt all remaining ice. Can you determine its final temperature using Q = mcΔT for the whole mixture?",
    "solution": "No. While ice and water coexist at ordinary melting pressure, the mixture remains at zero Celsius and the added energy melts some ice. Use $m_{melt}=Q/L_f$, subject to the available ice mass. Only after all ice melts can surplus heat warm the liquid using mcΔT."
  },
  {
    "id": "electricity-q3",
    "topic": "electricity",
    "kind": "Calculation",
    "prompt": "Two charges exert a 0.800 N force on each other. If their separation triples and their charges stay fixed, find the new force magnitude.",
    "solution": "Coulomb force scales as $1/r^2$. Thus $F_{new}=0.800/3^2=0.0889\\,\\mathrm N$. The attraction/repulsion character does not change because charge signs are unchanged."
  },
  {
    "id": "electricity-q4",
    "topic": "electricity",
    "kind": "Calculation",
    "prompt": "A $+3.00\\,\\mu\\mathrm C$ point charge produces a field at a point 0.300 m to its left. Find field magnitude and direction. Use $k_e=8.99\\times10^9$ in SI.",
    "solution": "$E=k_e|Q|/r^2=8.99\\times10^9(3.00\\times10^{-6})/0.300^2=3.00\\times10^5\\,\\mathrm{N/C}$. Direction is away from the positive source, hence left. Use the source charge, not a test charge, to find E."
  },
  {
    "id": "electricity-q5",
    "topic": "electricity",
    "kind": "Calculation",
    "prompt": "A charge $-4.00\\,\\mu\\mathrm C$ experiences a force of $0.0200\\,\\mathrm N$ upward. Find the electric field magnitude and direction.",
    "solution": "$E=F/|q|=0.0200/(4.00\\times10^{-6})=5.00\\times10^3\\,\\mathrm{N/C}$. Since the charge is negative, field and force are opposite: the field is downward."
  },
  {
    "id": "electricity-q6",
    "topic": "electricity",
    "kind": "Comparison",
    "prompt": "Equal positive point charges sit at x = −a and x = +a. What is the electric field at the origin? Is the field from either single source zero?",
    "solution": "The left charge produces a rightward field at the origin; the right charge produces an equal leftward field. They cancel, giving zero net field. Each individual contribution is nonzero. Superposition cancels vectors, not the existence of sources."
  },
  {
    "id": "electricity-q7",
    "topic": "electricity",
    "kind": "Calculation",
    "prompt": "Charges $+1.00\\,\\mu\\mathrm C$ at x = −0.100 m and $-1.00\\,\\mu\\mathrm C$ at x = +0.100 m are fixed. Find the field at the origin. Use $k_e=8.99\\times10^9$.",
    "solution": "Each contribution has magnitude $8.99\\times10^9(10^{-6})/(0.100)^2=8.99\\times10^5\\,\\mathrm{N/C}$. At the midpoint, both point right: away from the positive source and toward the negative source. Net field is $1.80\\times10^6\\,\\mathrm{N/C}$ right."
  },
  {
    "id": "electricity-q8",
    "topic": "electricity",
    "kind": "Multi-stage",
    "prompt": "At a point, source fields are 600 N/C right and 800 N/C down. Find resultant field and force on a $+2.00\\,\\mu\\mathrm C$ test charge.",
    "solution": "$E_x=600$, $E_y=-800\\,\\mathrm{N/C}$. Magnitude $E=\\sqrt{600^2+800^2}=1000\\,\\mathrm{N/C}$ at $53.1^\\circ$ below +x. Force magnitude is $qE=2.00\\times10^{-3}\\,\\mathrm N$ in the same direction because the charge is positive."
  },
  {
    "id": "electricity-q9",
    "topic": "electricity",
    "kind": "Concept",
    "prompt": "A charged rod attracts a neutral insulating object. Must the neutral object have acquired a net charge? Explain.",
    "solution": "No. Polarization can slightly separate bound positive and negative charge without changing total charge. In the rod’s nonuniform field, the nearer opposite-sign side can be attracted more strongly than the farther like-sign side is repelled. Net attraction does not prove net charge transfer."
  },
  {
    "id": "electricity-q10",
    "topic": "electricity",
    "kind": "Explain the error",
    "prompt": "A diagram shows electric field lines crossing at a point. Why is this inconsistent with an electrostatic field-line representation?",
    "solution": "A field vector at a nonzero-field point has one direction. Two crossing lines would give two different tangents and therefore two different directions at the same point. Field lines do not cross. Their density indicates relative field strength, not additional independent force vectors to add."
  },
  {
    "id": "electricity-q11",
    "topic": "electricity",
    "kind": "Concept",
    "prompt": "When rubbing leaves one initially neutral object with charge $+5.00\\,\\mathrm{nC}$, what charge is on the other object if they form an isolated pair? Which object lost electrons?",
    "solution": "Total charge remains zero, so the other object has $-5.00\\,\\mathrm{nC}$. The positively charged object lost electrons; the negatively charged one gained them. Rubbing transfers charge rather than creating it."
  },
  {
    "id": "electricity-q12",
    "topic": "electricity",
    "kind": "Calculation",
    "prompt": "A spherically symmetric charged shell has outer radius 0.100 m and total charge $+2.00\\,\\mu\\mathrm C$. Find field at a point 0.300 m from its center, outside it. Use $k_e=8.99\\times10^9$.",
    "solution": "Outside a spherical distribution, use the center-to-point distance: $E=k_eQ/r^2=8.99\\times10^9(2.00\\times10^{-6})/(0.300)^2=2.00\\times10^5\\,\\mathrm{N/C}$ outward. Do not substitute the 0.200 m distance from the surface."
  }
];
