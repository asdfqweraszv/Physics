export interface FormulaDetail { meaning:string; variables:{symbol:string;meaning:string;unit:string}[]; when:string; example:{prompt:string;steps:string[];check:string} }
export const formulaDetails: Record<string, FormulaDetail> = {
  "Average velocity and acceleration": {
    "meaning": "Average velocity measures signed position change per second. Average acceleration measures signed velocity change per second; neither tells you every instantaneous value.",
    "variables": [
      {
        "symbol": "\\bar v",
        "meaning": "Average velocity",
        "unit": "m/s"
      },
      {
        "symbol": "\\Delta x=x_f-x_i",
        "meaning": "Final minus initial position",
        "unit": "m"
      },
      {
        "symbol": "\\Delta t=t_f-t_i",
        "meaning": "Elapsed time (positive)",
        "unit": "s"
      },
      {
        "symbol": "\\bar a",
        "meaning": "Average acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "\\Delta v=v_f-v_i",
        "meaning": "Final minus initial velocity",
        "unit": "m/s"
      }
    ],
    "when": "These definitions apply even if acceleration varies. Use distance, not displacement, for average speed.",
    "example": {
      "prompt": "A runner goes from $x_i=2.0\\,\\mathrm m$ to $x_f=-4.0\\,\\mathrm m$ in $3.0\\,\\mathrm s$. Velocity changes from $+1.0$ to $-3.0\\,\\mathrm{m/s}$. Find both averages.",
      "steps": [
        "Choose right as positive. $\\Delta x=-4-2=-6.0\\,\\mathrm m$ and $\\Delta v=-3-1=-4.0\\,\\mathrm{m/s}$.",
        "$\\bar v=-6/3=-2.0\\,\\mathrm{m/s}$; $\\bar a=-4/3=-1.3\\,\\mathrm{m/s^2}$."
      ],
      "check": "Both signs refer to the chosen axis. Average speed cannot be found without the path length."
    }
  },
  "Constant acceleration": {
    "meaning": "The first equation updates velocity, the second updates position, and the third eliminates time. Pick the equation that excludes the unknown you do not need.",
    "variables": [
      {
        "symbol": "v_0,\\ v",
        "meaning": "Initial and final signed velocities",
        "unit": "m/s"
      },
      {
        "symbol": "a",
        "meaning": "Constant signed acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "x_0,\\ x",
        "meaning": "Initial and final positions",
        "unit": "m"
      },
      {
        "symbol": "t",
        "meaning": "Time since the initial state",
        "unit": "s"
      }
    ],
    "when": "Acceleration must be constant over the interval. For vertical motion with up positive use a = −g, including during ascent.",
    "example": {
      "prompt": "A car starts at $5.00\\,\\mathrm{m/s}$ and accelerates at $2.00\\,\\mathrm{m/s^2}$ for $4.00\\,\\mathrm s$.",
      "steps": [
        "$v=v_0+at=5+2(4)=13.0\\,\\mathrm{m/s}$.",
        "$x-x_0=v_0t+\\tfrac12at^2=5(4)+\\tfrac12(2)(4^2)=36.0\\,\\mathrm m$.",
        "Check without time: $v^2-v_0^2=169-25=144=2a\\Delta x$."
      ],
      "check": "The result lies between traveling the entire time at the initial or final speed: 20 m < 36 m < 52 m."
    }
  },
  "Vector components": {
    "meaning": "Components are signed projections on the chosen axes. The sine/cosine choice comes from the angle reference, not from a rule that x always uses cosine.",
    "variables": [
      {
        "symbol": "A",
        "meaning": "Vector magnitude (nonnegative)",
        "unit": "Same as the vector quantity"
      },
      {
        "symbol": "A_x,\\ A_y",
        "meaning": "Signed horizontal and vertical components",
        "unit": "Same as A"
      },
      {
        "symbol": "\\theta",
        "meaning": "Counterclockwise angle from positive x",
        "unit": "rad or degrees, consistently"
      }
    ],
    "when": "These expressions assume perpendicular x/y axes and an angle measured from +x. Recombine with magnitude sqrt(Ax² + Ay²) and a quadrant-aware direction.",
    "example": {
      "prompt": "A $10.0\\,\\mathrm N$ force points $30.0^\\circ$ above the negative x direction.",
      "steps": [
        "The angle from positive x is $150^\\circ$, not $30^\\circ$.",
        "$F_x=10\\cos150^\\circ=-8.66\\,\\mathrm N$; $F_y=10\\sin150^\\circ=5.00\\,\\mathrm N$.",
        "$\\sqrt{(-8.66)^2+5.00^2}=10.0\\,\\mathrm N$."
      ],
      "check": "The signs must match a force pointing up and left."
    }
  },
  "Projectile motion": {
    "meaning": "A projectile is constant-velocity motion horizontally and constant-acceleration motion vertically, linked by one shared time.",
    "variables": [
      {
        "symbol": "x_0,y_0",
        "meaning": "Launch coordinates",
        "unit": "m"
      },
      {
        "symbol": "x,y",
        "meaning": "Coordinates at time t",
        "unit": "m"
      },
      {
        "symbol": "v_0",
        "meaning": "Launch speed",
        "unit": "m/s"
      },
      {
        "symbol": "\\theta",
        "meaning": "Launch angle above +x",
        "unit": "rad or degrees"
      },
      {
        "symbol": "t",
        "meaning": "Time after launch",
        "unit": "s"
      },
      {
        "symbol": "g",
        "meaning": "Positive magnitude of gravitational acceleration",
        "unit": "m/s²"
      },
      {
        "symbol": "v_y",
        "meaning": "Signed vertical velocity at time t",
        "unit": "m/s"
      }
    ],
    "when": "Neglect air resistance and treat gravity as uniform. These component equations work even if launch and landing heights differ.",
    "example": {
      "prompt": "A ball launches at $10.0\\,\\mathrm{m/s}$, $30.0^\\circ$ above horizontal from the origin. Where is it after $0.500\\,\\mathrm s$? Use $g=9.81$.",
      "steps": [
        "$v_{0x}=10\\cos30^\\circ=8.66\\,\\mathrm{m/s}$; $v_{0y}=10\\sin30^\\circ=5.00\\,\\mathrm{m/s}$.",
        "$x=8.660(0.500)=4.33\\,\\mathrm m$.",
        "$y=5(0.500)-\\tfrac12(9.81)(0.500)^2=1.27\\,\\mathrm m$.",
        "$v_y=5-9.81(0.500)=0.0950\\,\\mathrm{m/s}$, so it is still rising slightly."
      ],
      "check": "Horizontal acceleration is zero; the vertical velocity changes by −gt."
    }
  },
  "Equal-height flight": {
    "meaning": "Flight time follows from the nonzero root of the vertical displacement equation. Range is horizontal speed multiplied by that time.",
    "variables": [
      {
        "symbol": "T",
        "meaning": "Total flight time",
        "unit": "s"
      },
      {
        "symbol": "R",
        "meaning": "Horizontal range",
        "unit": "m"
      },
      {
        "symbol": "v_0",
        "meaning": "Launch speed",
        "unit": "m/s"
      },
      {
        "symbol": "\\theta",
        "meaning": "Launch angle above horizontal",
        "unit": "rad or degrees"
      },
      {
        "symbol": "g",
        "meaning": "Positive gravitational acceleration magnitude",
        "unit": "m/s²"
      }
    ],
    "when": "Only for equal launch/landing heights, no drag and constant g. For a cliff or table solve the full vertical equation instead.",
    "example": {
      "prompt": "A projectile launches at $20.0\\,\\mathrm{m/s}$ at $30.0^\\circ$ and returns to the same height. Use $g=9.81$.",
      "steps": [
        "$T=2(20)\\sin30^\\circ/9.81=2.04\\,\\mathrm s$.",
        "$R=20^2\\sin60^\\circ/9.81=35.3\\,\\mathrm m$.",
        "The peak occurs at $T/2=1.02\\,\\mathrm s$."
      ],
      "check": "Angles 30° and 60° give the same range for the same speed under these assumptions."
    }
  },
  "Newton’s second law": {
    "meaning": "Acceleration responds to the vector sum of all external forces, not to any one force in isolation.",
    "variables": [
      {
        "symbol": "\\sum\\vec F",
        "meaning": "Net external force on the chosen object",
        "unit": "N = kg m/s²"
      },
      {
        "symbol": "m",
        "meaning": "Object mass (constant here)",
        "unit": "kg"
      },
      {
        "symbol": "\\vec a",
        "meaning": "Object acceleration",
        "unit": "m/s²"
      }
    ],
    "when": "Use an inertial frame and constant mass. Write independent equations along each chosen axis; zero acceleration means the force sum on that axis is zero.",
    "example": {
      "prompt": "A $3.00\\,\\mathrm{kg}$ crate feels $12.0\\,\\mathrm N$ right and $3.00\\,\\mathrm N$ left.",
      "steps": [
        "With right positive, $\\sum F_x=12-3=9.00\\,\\mathrm N$.",
        "$a_x=\\sum F_x/m=9/3=3.00\\,\\mathrm{m/s^2}$ to the right."
      ],
      "check": "Do not add the two magnitudes to obtain 15 N; direction matters."
    }
  },
  "Weight and friction": {
    "meaning": "Weight is gravitational force. Kinetic friction has a sliding magnitude; static friction is an inequality because it supplies only what equilibrium requires.",
    "variables": [
      {
        "symbol": "W",
        "meaning": "Weight magnitude (not work in this context)",
        "unit": "N"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "g",
        "meaning": "Positive gravitational acceleration magnitude",
        "unit": "m/s²"
      },
      {
        "symbol": "N",
        "meaning": "Normal force magnitude, not automatically mg",
        "unit": "N"
      },
      {
        "symbol": "f_k,\\ f_s",
        "meaning": "Kinetic friction magnitude and signed static friction component",
        "unit": "N"
      },
      {
        "symbol": "\\mu_k,\\ \\mu_s",
        "meaning": "Kinetic and static friction coefficients",
        "unit": "Dimensionless"
      }
    ],
    "when": "The Coulomb friction model approximates dry sliding/contact. Static friction opposes relative slipping tendency; kinetic friction opposes actual relative sliding.",
    "example": {
      "prompt": "A $4.00\\,\\mathrm{kg}$ block on a level table has $\\mu_s=0.500$, $\\mu_k=0.300$. A horizontal $10.0\\,\\mathrm N$ pull acts. Will it move?",
      "steps": [
        "$N=mg=39.24\\,\\mathrm N$, since there are no other vertical forces or vertical acceleration.",
        "$f_{s,max}=\\mu_sN=19.62\\,\\mathrm N$. The required friction is only $10.0\\,\\mathrm N$.",
        "It stays at rest with static friction $10.0\\,\\mathrm N$ opposite the pull. If already sliding, $f_k=11.8\\,\\mathrm N$."
      ],
      "check": "Do not assign maximum static friction when a smaller force suffices."
    }
  },
  "Hooke’s law": {
    "meaning": "An ideal spring pushes or pulls back toward its equilibrium position. Larger displacement gives a proportionally larger restoring force.",
    "variables": [
      {
        "symbol": "F_x",
        "meaning": "Spring force component along x",
        "unit": "N"
      },
      {
        "symbol": "k",
        "meaning": "Positive spring stiffness",
        "unit": "N/m"
      },
      {
        "symbol": "x",
        "meaning": "Signed extension/compression from equilibrium",
        "unit": "m"
      }
    ],
    "when": "Valid within the linear elastic range. Here x is measured from equilibrium, not an arbitrary laboratory origin.",
    "example": {
      "prompt": "A spring has $k=200\\,\\mathrm{N/m}$ and is stretched $0.0300\\,\\mathrm m$ to the right.",
      "steps": [
        "Take right positive: $x=+0.0300\\,\\mathrm m$.",
        "$F_x=-kx=-200(0.0300)=-6.00\\,\\mathrm N$."
      ],
      "check": "The negative sign means the spring pulls left, back toward equilibrium."
    }
  },
  "Angled spring pull at constant speed": {
    "meaning": "The upward spring component reduces contact pressure; the horizontal component balances sliding friction. Combining both balances gives the coefficient.",
    "variables": [
      {
        "symbol": "N",
        "meaning": "Normal force magnitude",
        "unit": "N"
      },
      {
        "symbol": "m",
        "meaning": "Block mass",
        "unit": "kg"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration magnitude",
        "unit": "m/s²"
      },
      {
        "symbol": "k",
        "meaning": "Spring constant",
        "unit": "N/m"
      },
      {
        "symbol": "x",
        "meaning": "Positive spring extension",
        "unit": "m"
      },
      {
        "symbol": "\\theta",
        "meaning": "Pull angle above horizontal",
        "unit": "rad or degrees"
      },
      {
        "symbol": "\\mu_k",
        "meaning": "Kinetic friction coefficient",
        "unit": "Dimensionless"
      }
    ],
    "when": "Horizontal surface, steady straight-line sliding, upward pull and N > 0. If the denominator becomes nonpositive, the assumed contact model has failed.",
    "example": {
      "prompt": "Let $m=5.00\\,\\mathrm{kg}$, $k=100\\,\\mathrm{N/m}$, $x=0.200\\,\\mathrm m$, $\\theta=30.0^\\circ$. The block slides steadily.",
      "steps": [
        "$F=kx=20.0\\,\\mathrm N$.",
        "$N=mg-F\\sin\\theta=49.05-10.0=39.05\\,\\mathrm N$.",
        "$f_k=F\\cos\\theta=17.32\\,\\mathrm N$; $\\mu_k=f_k/N=0.444$."
      ],
      "check": "Normal force remains positive. Using N = mg would underestimate the coefficient."
    }
  },
  "Work and kinetic energy": {
    "meaning": "Work measures energy transferred by the force along the displacement. Kinetic energy measures motion and depends on speed squared, not on direction.",
    "variables": [
      {
        "symbol": "W",
        "meaning": "Work by the specified force",
        "unit": "J = N m"
      },
      {
        "symbol": "F",
        "meaning": "Constant force magnitude",
        "unit": "N"
      },
      {
        "symbol": "d",
        "meaning": "Displacement magnitude",
        "unit": "m"
      },
      {
        "symbol": "\\theta",
        "meaning": "Angle between force and displacement",
        "unit": "rad or degrees"
      },
      {
        "symbol": "K",
        "meaning": "Kinetic energy",
        "unit": "J"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "v",
        "meaning": "Speed",
        "unit": "m/s"
      }
    ],
    "when": "The work formula shown assumes constant force. For varying forces use the force-displacement integral. Kinetic energy here is nonrelativistic translational energy.",
    "example": {
      "prompt": "A $10.0\\,\\mathrm N$ force pulls $3.00\\,\\mathrm m$ at $60.0^\\circ$ to displacement. What work does it do? Also find K for a 2.00 kg object at 4.00 m/s.",
      "steps": [
        "$W=Fd\\cos\\theta=10(3)\\cos60^\\circ=15.0\\,\\mathrm J$.",
        "$K=\\tfrac12mv^2=\\tfrac12(2)(4^2)=16.0\\,\\mathrm J$."
      ],
      "check": "A perpendicular force does no work; opposite direction gives negative work. K is never negative."
    }
  },
  "Work-energy theorem": {
    "meaning": "All forces together change kinetic energy. This can bypass a detailed calculation of acceleration and time.",
    "variables": [
      {
        "symbol": "W_{\\mathrm{net}}",
        "meaning": "Sum of work by every force on the object",
        "unit": "J"
      },
      {
        "symbol": "\\Delta K=K_f-K_i",
        "meaning": "Change in kinetic energy",
        "unit": "J"
      },
      {
        "symbol": "K_i,K_f",
        "meaning": "Initial and final kinetic energy",
        "unit": "J"
      }
    ],
    "when": "Use net work, including friction, gravity and applied forces. Do not also add a potential-energy change for gravity if its work was already counted.",
    "example": {
      "prompt": "A $2.00\\,\\mathrm{kg}$ cart accelerates from $3.00$ to $5.00\\,\\mathrm{m/s}$.",
      "steps": [
        "$K_i=\\tfrac12(2)(3^2)=9.00\\,\\mathrm J$; $K_f=25.0\\,\\mathrm J$.",
        "$W_{net}=K_f-K_i=16.0\\,\\mathrm J$."
      ],
      "check": "Positive net work is consistent with increased speed."
    }
  },
  "Mechanical energy": {
    "meaning": "Conservative effects are stored in potential energy; nonconservative work changes the sum K + U. The zero of potential energy is arbitrary, but differences matter.",
    "variables": [
      {
        "symbol": "K_i,K_f",
        "meaning": "Initial/final kinetic energy",
        "unit": "J"
      },
      {
        "symbol": "U_i,U_f",
        "meaning": "Initial/final potential energy",
        "unit": "J"
      },
      {
        "symbol": "W_{\\mathrm{nc}}",
        "meaning": "Work of forces not represented by U",
        "unit": "J"
      },
      {
        "symbol": "\\Delta U_g",
        "meaning": "Change in gravitational potential energy",
        "unit": "J"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration magnitude",
        "unit": "m/s²"
      },
      {
        "symbol": "\\Delta y=y_f-y_i",
        "meaning": "Signed height change, up positive",
        "unit": "m"
      }
    ],
    "when": "Use mgΔy for uniform near-Earth gravity. Friction usually gives negative Wnc; with Wnc = 0 the mechanical energy is conserved.",
    "example": {
      "prompt": "A $1.00\\,\\mathrm{kg}$ cart starts from rest $2.00\\,\\mathrm m$ above the endpoint. Friction does $-4.00\\,\\mathrm J$ of work. Use $g=9.81$.",
      "steps": [
        "Set final potential energy zero. $K_i=0$, $U_i=19.62\\,\\mathrm J$, $U_f=0$.",
        "$K_f=K_i+U_i+W_{nc}-U_f=15.62\\,\\mathrm J$.",
        "$v_f=\\sqrt{2K_f/m}=5.59\\,\\mathrm{m/s}$."
      ],
      "check": "This is less than the frictionless speed 6.26 m/s."
    }
  },
  "Power": {
    "meaning": "Power is how quickly work is done. Instantaneous power is the force component along velocity multiplied by speed.",
    "variables": [
      {
        "symbol": "P",
        "meaning": "Instantaneous power",
        "unit": "W = J/s"
      },
      {
        "symbol": "W",
        "meaning": "Work (not the watt unit)",
        "unit": "J"
      },
      {
        "symbol": "t",
        "meaning": "Time",
        "unit": "s"
      },
      {
        "symbol": "\\vec F",
        "meaning": "Force vector",
        "unit": "N"
      },
      {
        "symbol": "\\vec v",
        "meaning": "Velocity vector",
        "unit": "m/s"
      }
    ],
    "when": "Use W/Δt for average power. The dot product includes the angle between force and velocity; perpendicular force gives zero instantaneous power.",
    "example": {
      "prompt": "A motor exerts $200\\,\\mathrm N$ along a belt moving at $3.00\\,\\mathrm{m/s}$.",
      "steps": [
        "$P=Fv=200(3)=600\\,\\mathrm W$.",
        "At this constant power, energy delivered in $5.00\\,\\mathrm s$ is $Pt=3000\\,\\mathrm J$."
      ],
      "check": "N × m/s = J/s, the watt. Doubling speed at the same force doubles power."
    }
  },
  "Frictional melting": {
    "meaning": "Divide kinetic energy lost by the energy needed to warm and melt each kilogram of ice. The total moving block mass and melted mass are different quantities.",
    "variables": [
      {
        "symbol": "m_{\\mathrm{melt}}",
        "meaning": "Mass of ice warmed and melted",
        "unit": "kg"
      },
      {
        "symbol": "M",
        "meaning": "Total moving block mass",
        "unit": "kg"
      },
      {
        "symbol": "v_i,v_f",
        "meaning": "Initial and final block speeds",
        "unit": "m/s"
      },
      {
        "symbol": "c_{\\mathrm{ice}}",
        "meaning": "Ice specific heat capacity",
        "unit": "J/(kg K)"
      },
      {
        "symbol": "T_i",
        "meaning": "Initial temperature below zero Celsius",
        "unit": "°C"
      },
      {
        "symbol": "L_f",
        "meaning": "Specific latent heat of fusion",
        "unit": "J/kg"
      }
    ],
    "when": "Assumes all lost kinetic energy heats only the portion that melts, from Ti to zero, with no other heat losses. It does not describe uniform warming of the entire block.",
    "example": {
      "prompt": "A $2.00\\,\\mathrm{kg}$ ice block slows from $10.0$ to $0\\,\\mathrm{m/s}$. Melted ice initially is at $-10.0^\\circ\\mathrm C$. Use $c_i=2100$, $L_f=334000$ in SI.",
      "steps": [
        "$E_{lost}=\\tfrac12(2)(10^2)=100\\,\\mathrm J$.",
        "Energy per kg is $2100(10)+334000=355000\\,\\mathrm{J/kg}$.",
        "$m_{melt}=100/355000=2.82\\times10^{-4}\\,\\mathrm{kg}=0.282\\,\\mathrm g$."
      ],
      "check": "The melted mass is tiny compared with the block; ice requires a large latent energy."
    }
  },
  "Momentum and impulse": {
    "meaning": "Momentum tracks mass times signed velocity. Impulse is the area under a force-time curve and changes momentum.",
    "variables": [
      {
        "symbol": "\\vec p",
        "meaning": "Momentum",
        "unit": "kg m/s"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "\\vec v",
        "meaning": "Velocity",
        "unit": "m/s"
      },
      {
        "symbol": "\\vec J",
        "meaning": "Impulse",
        "unit": "N s = kg m/s"
      },
      {
        "symbol": "\\vec F,\\vec F_{\\mathrm{avg}}",
        "meaning": "Instantaneous/average net force",
        "unit": "N"
      },
      {
        "symbol": "t,\\Delta t",
        "meaning": "Time/interaction duration",
        "unit": "s"
      },
      {
        "symbol": "\\Delta\\vec p",
        "meaning": "Final minus initial momentum",
        "unit": "kg m/s"
      }
    ],
    "when": "Always vectorial. Favg Δt works for a varying force if Favg is its time average over that interval.",
    "example": {
      "prompt": "A $0.200\\,\\mathrm{kg}$ ball moving right at $5.00\\,\\mathrm{m/s}$ stops in $0.100\\,\\mathrm s$.",
      "steps": [
        "$\\Delta p=m(v_f-v_i)=0.200(0-5)=-1.00\\,\\mathrm{kg\\,m/s}$.",
        "$J=-1.00\\,\\mathrm{N\\,s}$ and $F_{avg}=J/\\Delta t=-10.0\\,\\mathrm N$."
      ],
      "check": "The impulse and average force are leftward, opposite the initial motion."
    }
  },
  "Momentum conservation": {
    "meaning": "Momentum transferred by internal forces cancels for the whole system. Only net external impulse can change total system momentum.",
    "variables": [
      {
        "symbol": "\\sum\\vec p_i",
        "meaning": "Total system momentum before interaction",
        "unit": "kg m/s"
      },
      {
        "symbol": "\\sum\\vec p_f",
        "meaning": "Total system momentum after interaction",
        "unit": "kg m/s"
      },
      {
        "symbol": "i,f",
        "meaning": "Initial and final states; not object labels",
        "unit": "No unit"
      }
    ],
    "when": "Choose the system explicitly. Momentum may be conserved in one direction even when not conserved in another. Kinetic energy requires a separate elastic-collision assumption.",
    "example": {
      "prompt": "A $2.00\\,\\mathrm{kg}$ cart moving right at $3.00\\,\\mathrm{m/s}$ sticks to a stationary $1.00\\,\\mathrm{kg}$ cart.",
      "steps": [
        "Neglect external horizontal impulse. $p_i=2(3)+1(0)=6.00\\,\\mathrm{kg\\,m/s}$.",
        "$p_f=(2+1)v$, so $v=6/3=2.00\\,\\mathrm{m/s}$ right.",
        "$K_i=9.00\\,\\mathrm J$, $K_f=6.00\\,\\mathrm J$: momentum is conserved, kinetic energy is not."
      ],
      "check": "The final speed is between the two initial velocities."
    }
  },
  "Embedded bullet": {
    "meaning": "A stationary target shares the bullet’s initial momentum after embedding. The common speed is reduced by the ratio of bullet mass to total mass.",
    "variables": [
      {
        "symbol": "m",
        "meaning": "Bullet mass",
        "unit": "kg"
      },
      {
        "symbol": "M",
        "meaning": "Initially stationary block mass",
        "unit": "kg"
      },
      {
        "symbol": "u",
        "meaning": "Bullet initial signed velocity",
        "unit": "m/s"
      },
      {
        "symbol": "v",
        "meaning": "Common velocity immediately after impact",
        "unit": "m/s"
      }
    ],
    "when": "Perfectly inelastic collision, stationary block, negligible external impulse along the bullet direction. If the target initially moves, include its initial momentum.",
    "example": {
      "prompt": "A $0.0200\\,\\mathrm{kg}$ bullet at $300\\,\\mathrm{m/s}$ embeds in a $1.98\\,\\mathrm{kg}$ block.",
      "steps": [
        "$mu=(M+m)v$.",
        "$v=0.0200(300)/(1.98+0.0200)=3.00\\,\\mathrm{m/s}$."
      ],
      "check": "The block’s inertia dominates. The combined speed is much less than 300 m/s."
    }
  },
  "After leaving a table": {
    "meaning": "Vertical free fall sets the time; horizontal momentum from an earlier impact sets the launch speed. Different stages use different laws.",
    "variables": [
      {
        "symbol": "t",
        "meaning": "Flight time after leaving the edge",
        "unit": "s"
      },
      {
        "symbol": "h",
        "meaning": "Positive table height above landing surface",
        "unit": "m"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration magnitude",
        "unit": "m/s²"
      },
      {
        "symbol": "x",
        "meaning": "Horizontal travel after leaving edge",
        "unit": "m"
      },
      {
        "symbol": "m,M",
        "meaning": "Bullet and block masses",
        "unit": "kg"
      },
      {
        "symbol": "u",
        "meaning": "Bullet initial horizontal speed before impact",
        "unit": "m/s"
      }
    ],
    "when": "The embedded block leaves horizontally immediately, with no intervening speed loss; no air drag. If it slides with friction before the edge, first find the reduced edge speed.",
    "example": {
      "prompt": "A bullet-block system leaves at $3.00\\,\\mathrm{m/s}$ from a $1.25\\,\\mathrm m$ table. Use $g=9.81$.",
      "steps": [
        "$h=\\tfrac12gt^2$, giving $t=\\sqrt{2(1.25)/9.81}=0.505\\,\\mathrm s$.",
        "$x=vt=3.00(0.5048)=1.51\\,\\mathrm m$."
      ],
      "check": "The flight time depends on height, not on horizontal speed or total mass."
    }
  },
  "Circular motion": {
    "meaning": "Centripetal acceleration changes the direction of velocity. Its force requirement is a net inward sum supplied by actual forces such as tension or friction.",
    "variables": [
      {
        "symbol": "v",
        "meaning": "Tangential speed",
        "unit": "m/s"
      },
      {
        "symbol": "\\omega",
        "meaning": "Angular speed",
        "unit": "rad/s"
      },
      {
        "symbol": "r",
        "meaning": "Circle radius",
        "unit": "m"
      },
      {
        "symbol": "a_c",
        "meaning": "Inward centripetal acceleration magnitude",
        "unit": "m/s²"
      },
      {
        "symbol": "\\sum F_{\\mathrm{in}}",
        "meaning": "Net inward force component",
        "unit": "N"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      }
    ],
    "when": "Use a fixed radius and an inertial frame. Uniform speed still has ac; if speed changes, add a perpendicular tangential acceleration.",
    "example": {
      "prompt": "A $2.00\\,\\mathrm{kg}$ object moves at $4.00\\,\\mathrm{m/s}$ around radius $2.00\\,\\mathrm m$.",
      "steps": [
        "$\\omega=v/r=2.00\\,\\mathrm{rad/s}$.",
        "$a_c=v^2/r=8.00\\,\\mathrm{m/s^2}$.",
        "$\\sum F_{in}=ma_c=16.0\\,\\mathrm N$."
      ],
      "check": "Doubling speed at fixed radius multiplies the required force by four."
    }
  },
  "Angular conversion and tangential acceleration": {
    "meaning": "One revolution is 2π radians and one minute is 60 seconds. Tangential acceleration changes speed; centripetal acceleration changes direction.",
    "variables": [
      {
        "symbol": "\\omega",
        "meaning": "Angular speed",
        "unit": "rad/s"
      },
      {
        "symbol": "\\mathrm{rpm}",
        "meaning": "Revolutions per minute (input rate)",
        "unit": "rev/min"
      },
      {
        "symbol": "a_t",
        "meaning": "Tangential acceleration magnitude",
        "unit": "m/s²"
      },
      {
        "symbol": "r",
        "meaning": "Radius",
        "unit": "m"
      },
      {
        "symbol": "\\alpha",
        "meaning": "Angular acceleration",
        "unit": "rad/s²"
      },
      {
        "symbol": "a_c",
        "meaning": "Centripetal acceleration magnitude",
        "unit": "m/s²"
      },
      {
        "symbol": "a",
        "meaning": "Total acceleration magnitude",
        "unit": "m/s²"
      }
    ],
    "when": "Radius is fixed and radial/tangential directions are perpendicular. Use the magnitude of rα when combining component magnitudes.",
    "example": {
      "prompt": "A point at $r=0.500\\,\\mathrm m$ turns at $60.0\\,\\mathrm{rpm}$ while $\\alpha=4.00\\,\\mathrm{rad/s^2}$.",
      "steps": [
        "$\\omega=60(2\\pi)/60=2\\pi\\,\\mathrm{rad/s}$.",
        "$a_c=\\omega^2r=19.74\\,\\mathrm{m/s^2}$; $a_t=r\\alpha=2.00\\,\\mathrm{m/s^2}$.",
        "$a=\\sqrt{19.74^2+2.00^2}=19.8\\,\\mathrm{m/s^2}$."
      ],
      "check": "Do not add the perpendicular magnitudes directly."
    }
  },
  "Minimum top speed": {
    "meaning": "At the top, downward gravity and inward contact force both point toward the center. At the contact threshold the surface no longer needs to push.",
    "variables": [
      {
        "symbol": "m",
        "meaning": "Mass of object in bucket",
        "unit": "kg"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration magnitude",
        "unit": "m/s²"
      },
      {
        "symbol": "N",
        "meaning": "Inward normal contact force at top",
        "unit": "N"
      },
      {
        "symbol": "v",
        "meaning": "Speed at top",
        "unit": "m/s"
      },
      {
        "symbol": "r",
        "meaning": "Circle radius",
        "unit": "m"
      },
      {
        "symbol": "v_{\\min}",
        "meaning": "Minimum top speed for maintained contact",
        "unit": "m/s"
      }
    ],
    "when": "The bucket/object cannot sustain a pulling normal force. The limiting N = 0 condition is specific to loss of contact and is not the general top-force equation.",
    "example": {
      "prompt": "For $r=1.00\\,\\mathrm m$ and $g=9.81$, find the threshold and N for a 0.500 kg object at 4.00 m/s.",
      "steps": [
        "$v_{min}=\\sqrt{gr}=3.13\\,\\mathrm{m/s}$.",
        "At $v=4.00\\,\\mathrm{m/s}$, $N=mv^2/r-mg=0.500(16)-4.905=3.10\\,\\mathrm N$."
      ],
      "check": "A speed above the threshold gives a positive inward normal force."
    }
  },
  "Flat and banked turns": {
    "meaning": "Flat turns use static friction for horizontal acceleration. A frictionless bank instead tilts the normal force so one component is horizontal.",
    "variables": [
      {
        "symbol": "v_{\\max}",
        "meaning": "Flat-turn speed at impending skid",
        "unit": "m/s"
      },
      {
        "symbol": "\\mu_s",
        "meaning": "Static friction coefficient",
        "unit": "Dimensionless"
      },
      {
        "symbol": "g",
        "meaning": "Gravitational acceleration magnitude",
        "unit": "m/s²"
      },
      {
        "symbol": "r",
        "meaning": "Turn radius",
        "unit": "m"
      },
      {
        "symbol": "\\theta",
        "meaning": "Road banking angle above horizontal",
        "unit": "rad or degrees"
      },
      {
        "symbol": "v",
        "meaning": "Design speed for frictionless bank",
        "unit": "m/s"
      }
    ],
    "when": "Flat formula assumes level road and N = mg. Banked formula assumes no friction and no vertical acceleration; it is a design speed, not a universal maximum.",
    "example": {
      "prompt": "For $r=50.0\\,\\mathrm m$ and $\\mu_s=0.400$, find flat-turn vmax. What bank supports $15.0\\,\\mathrm{m/s}$ without friction? Use g = 9.81.",
      "steps": [
        "$v_{max}=\\sqrt{0.400(9.81)(50)}=14.0\\,\\mathrm{m/s}$.",
        "$\\tan\\theta=15^2/(50\\cdot9.81)=0.4587$; $\\theta=24.6^\\circ$."
      ],
      "check": "Mass cancels in both balances. Increasing speed requires a steeper frictionless bank."
    }
  },
  "Torque": {
    "meaning": "Torque measures the turning tendency about a chosen pivot. Only the perpendicular component of force contributes.",
    "variables": [
      {
        "symbol": "\\tau",
        "meaning": "Torque magnitude",
        "unit": "N m"
      },
      {
        "symbol": "r",
        "meaning": "Distance from pivot to force application point",
        "unit": "m"
      },
      {
        "symbol": "F",
        "meaning": "Force magnitude",
        "unit": "N"
      },
      {
        "symbol": "\\theta",
        "meaning": "Angle between radius vector and force",
        "unit": "rad or degrees"
      },
      {
        "symbol": "\\ell_\\perp",
        "meaning": "Perpendicular distance from pivot to line of action",
        "unit": "m"
      }
    ],
    "when": "The displayed formula is a magnitude; assign clockwise/counterclockwise signs separately. The same force can have different torque about different pivots.",
    "example": {
      "prompt": "A $20.0\\,\\mathrm N$ force acts $0.300\\,\\mathrm m$ from a hinge at $30.0^\\circ$ to the lever, tending counterclockwise.",
      "steps": [
        "$\\ell_\\perp=r\\sin\\theta=0.300\\sin30^\\circ=0.150\\,\\mathrm m$.",
        "$\\tau=F\\ell_\\perp=20(0.150)=3.00\\,\\mathrm{N\\,m}$ counterclockwise."
      ],
      "check": "Torque vanishes if the line passes through the hinge. N m here denotes torque, not work."
    }
  },
  "Temperature and sensible heat": {
    "meaning": "Absolute temperature is shifted from Celsius by 273.15. Sensible heat changes a material’s temperature without changing its phase.",
    "variables": [
      {
        "symbol": "T_{\\mathrm K}",
        "meaning": "Absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "T_{^\\circ\\mathrm C}",
        "meaning": "Celsius temperature",
        "unit": "°C"
      },
      {
        "symbol": "Q",
        "meaning": "Heat gained by material (negative for cooling)",
        "unit": "J"
      },
      {
        "symbol": "m",
        "meaning": "Mass",
        "unit": "kg"
      },
      {
        "symbol": "c",
        "meaning": "Specific heat capacity",
        "unit": "J/(kg K)"
      },
      {
        "symbol": "\\Delta T=T_f-T_i",
        "meaning": "Signed temperature change",
        "unit": "K or °C interval"
      }
    ],
    "when": "Use approximately constant c within one phase. Celsius and kelvin differences have equal numerical values, but absolute values are not interchangeable.",
    "example": {
      "prompt": "Warm $0.250\\,\\mathrm{kg}$ of water from $20.0$ to $40.0^\\circ\\mathrm C$. Use $c=4186\\,\\mathrm{J/(kg\\,K)}$.",
      "steps": [
        "Initial and final absolute temperatures are $293.15\\,\\mathrm K$ and $313.15\\,\\mathrm K$.",
        "$\\Delta T=20.0\\,\\mathrm K$, not 293.15 K.",
        "$Q=0.250(4186)(20.0)=2.09\\times10^4\\,\\mathrm J$."
      ],
      "check": "Warming means Q is positive; a temperature interval is not shifted by 273.15."
    }
  },
  "Calorimetry": {
    "meaning": "For a thermally isolated collection of materials, every joule lost by one part is gained by another part, including any container and phase-change stages.",
    "variables": [
      {
        "symbol": "Q",
        "meaning": "Signed heat gained by one component or stage",
        "unit": "J"
      },
      {
        "symbol": "\\sum Q",
        "meaning": "Sum over all included heat exchanges",
        "unit": "J"
      }
    ],
    "when": "No heat exchange with surroundings and no unaccounted work. Include the container if its heat capacity matters; first check whether phase transitions occur.",
    "example": {
      "prompt": "Mix equal masses of water at $20.0$ and $60.0^\\circ\\mathrm C$ in an insulated negligible-heat-capacity container.",
      "steps": [
        "$mc(T_f-20)+mc(T_f-60)=0$.",
        "Cancel the common mc: $2T_f-80=0$, hence $T_f=40.0^\\circ\\mathrm C$."
      ],
      "check": "The equilibrium is between the initial temperatures. A simple average works here only because heat capacities are equal."
    }
  },
  "Conduction": {
    "meaning": "A larger temperature gradient drives greater heat current; a longer path resists transfer. Area and thermal conductivity multiply the current.",
    "variables": [
      {
        "symbol": "Q",
        "meaning": "Transferred heat magnitude",
        "unit": "J"
      },
      {
        "symbol": "k",
        "meaning": "Thermal conductivity (not Boltzmann constant)",
        "unit": "W/(m K)"
      },
      {
        "symbol": "A",
        "meaning": "Cross-sectional area normal to heat flow",
        "unit": "m²"
      },
      {
        "symbol": "\\Delta T",
        "meaning": "Hot-minus-cold temperature difference",
        "unit": "K or °C interval"
      },
      {
        "symbol": "L",
        "meaning": "Conduction path length",
        "unit": "m"
      },
      {
        "symbol": "t",
        "meaning": "Elapsed time",
        "unit": "s"
      },
      {
        "symbol": "Q/t",
        "meaning": "Steady heat current",
        "unit": "W"
      }
    ],
    "when": "Steady one-dimensional conduction, constant k, uniform section and maintained end temperatures. Transient warming of the rod itself is not described by this steady relation.",
    "example": {
      "prompt": "A slab has $k=0.200\\,\\mathrm{W/(m\\,K)}$, $A=0.0100\\,\\mathrm{m^2}$, $L=0.0200\\,\\mathrm m$, $\\Delta T=30.0\\,\\mathrm K$.",
      "steps": [
        "$Q/t=kA\\Delta T/L=0.200(0.0100)(30)/0.0200=3.00\\,\\mathrm W$.",
        "In $60.0\\,\\mathrm s$, $Q=3.00(60)=180\\,\\mathrm J$."
      ],
      "check": "Doubling path length halves heat current if all other variables stay fixed."
    }
  },
  "Net radiation": {
    "meaning": "An object emits thermal radiation and absorbs radiation from its surroundings. Their difference determines net outward energy transfer.",
    "variables": [
      {
        "symbol": "P_{\\mathrm{net}}",
        "meaning": "Net outward radiative power",
        "unit": "W"
      },
      {
        "symbol": "e",
        "meaning": "Emissivity (0 to 1)",
        "unit": "Dimensionless"
      },
      {
        "symbol": "\\sigma",
        "meaning": "Stefan–Boltzmann constant, approximately 5.67 × 10⁻⁸",
        "unit": "W/(m² K⁴)"
      },
      {
        "symbol": "A",
        "meaning": "Effective radiating area",
        "unit": "m²"
      },
      {
        "symbol": "T",
        "meaning": "Object absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "T_s",
        "meaning": "Surroundings absolute temperature",
        "unit": "K"
      }
    ],
    "when": "Idealized gray surface exchanging with large uniform-temperature surroundings; matching emissivity/absorptivity. Kelvin is mandatory. A negative result means net inward transfer.",
    "example": {
      "prompt": "Let $e=1.00$, $A=1.00\\,\\mathrm{m^2}$, $T=300\\,\\mathrm K$, $T_s=290\\,\\mathrm K$, $\\sigma=5.67\\times10^{-8}$.",
      "steps": [
        "$P_{net}=5.67\\times10^{-8}(300^4-290^4)=58.2\\,\\mathrm W$.",
        "Object emission alone is $459\\,\\mathrm W$; most is offset by absorbed room radiation."
      ],
      "check": "Equal object and room temperatures give zero net power, not zero emission."
    }
  },
  "Equation of state": {
    "meaning": "Pressure, volume, amount and absolute temperature are linked. The two forms count the same gas either molecule by molecule or in moles.",
    "variables": [
      {
        "symbol": "P",
        "meaning": "Absolute pressure (not gauge pressure)",
        "unit": "Pa"
      },
      {
        "symbol": "V",
        "meaning": "Gas volume",
        "unit": "m³"
      },
      {
        "symbol": "N",
        "meaning": "Number of molecules",
        "unit": "Count"
      },
      {
        "symbol": "k_B",
        "meaning": "Boltzmann constant, 1.380649 × 10⁻²³",
        "unit": "J/K"
      },
      {
        "symbol": "T",
        "meaning": "Absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "n",
        "meaning": "Amount of gas",
        "unit": "mol"
      },
      {
        "symbol": "R",
        "meaning": "Universal gas constant, approximately 8.314",
        "unit": "J/(mol K)"
      }
    ],
    "when": "Classical dilute gas, approximately negligible interactions and molecular volume. Use absolute pressure, kelvin, and a matching set of units.",
    "example": {
      "prompt": "Find the volume of $1.00\\,\\mathrm{mol}$ of ideal gas at $300\\,\\mathrm K$ and $1.00\\times10^5\\,\\mathrm{Pa}$.",
      "steps": [
        "$V=nRT/P=1.00(8.314)(300)/(1.00\\times10^5)$.",
        "$V=0.0249\\,\\mathrm{m^3}=24.9\\,\\mathrm L$."
      ],
      "check": "Pa m³ = J, so nRT/P has volume units. One liter is 10⁻³ m³."
    }
  },
  "Fixed amount between states": {
    "meaning": "For an unchanged amount of ideal gas, PV/T has the same value at two equilibrium states even when all three macroscopic variables change.",
    "variables": [
      {
        "symbol": "P_1,P_2",
        "meaning": "Initial/final absolute pressures",
        "unit": "Consistent pressure units"
      },
      {
        "symbol": "V_1,V_2",
        "meaning": "Initial/final volumes",
        "unit": "Consistent volume units"
      },
      {
        "symbol": "T_1,T_2",
        "meaning": "Initial/final absolute temperatures",
        "unit": "K"
      }
    ],
    "when": "The amount of gas must stay fixed. Ratios allow liters or kPa if used consistently on both sides; never mix Celsius with kelvin.",
    "example": {
      "prompt": "A gas at $100\\,\\mathrm{kPa}$, $2.00\\,\\mathrm L$, $300\\,\\mathrm K$ changes to $1.50\\,\\mathrm L$ and $450\\,\\mathrm K$.",
      "steps": [
        "Rearrange: $P_2=P_1(V_1/V_2)(T_2/T_1)$.",
        "$P_2=100(2.00/1.50)(450/300)=200\\,\\mathrm{kPa}$."
      ],
      "check": "Heating and compression both increase the pressure in this example."
    }
  },
  "Fixed-variable laws": {
    "meaning": "Each named gas law is the equation of state with two variables fixed. Identify those constraints before picking a proportionality.",
    "variables": [
      {
        "symbol": "P",
        "meaning": "Absolute pressure",
        "unit": "Pa or consistent pressure unit"
      },
      {
        "symbol": "V",
        "meaning": "Volume",
        "unit": "m³ or consistent volume unit"
      },
      {
        "symbol": "T",
        "meaning": "Absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "N",
        "meaning": "Molecule count held fixed in all three laws",
        "unit": "Count"
      },
      {
        "symbol": "\\mathrm{const.}",
        "meaning": "A value unchanged under the stated constraints",
        "unit": "Depends on the ratio/product"
      }
    ],
    "when": "Boyle: fixed T,N. Charles: fixed P,N. Constant-volume law: fixed V,N. If particles are added, these fixed-amount relations no longer directly apply.",
    "example": {
      "prompt": "A $2.00\\,\\mathrm L$ balloon cools from $300$ to $240\\,\\mathrm K$ at fixed pressure and gas amount.",
      "steps": [
        "Use Charles’s law: $V_2/V_1=T_2/T_1$.",
        "$V_2=2.00(240/300)=1.60\\,\\mathrm L$."
      ],
      "check": "Cooling reduces volume at fixed pressure; do not predict a pressure change instead."
    }
  },
  "Translational kinetic energy": {
    "meaning": "Absolute temperature measures average random translational energy per molecule. Total internal energy equals the sum of these energies only for a monatomic ideal gas model.",
    "variables": [
      {
        "symbol": "\\langle K\\rangle",
        "meaning": "Average translational kinetic energy per molecule",
        "unit": "J"
      },
      {
        "symbol": "k_B",
        "meaning": "Boltzmann constant",
        "unit": "J/K"
      },
      {
        "symbol": "T",
        "meaning": "Absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "U_{\\mathrm{mono}}",
        "meaning": "Monatomic gas internal energy",
        "unit": "J"
      },
      {
        "symbol": "n",
        "meaning": "Amount of gas",
        "unit": "mol"
      },
      {
        "symbol": "R",
        "meaning": "Universal gas constant",
        "unit": "J/(mol K)"
      }
    ],
    "when": "Classical thermal equilibrium. Diatomic gases may store additional rotational/vibrational energy, so do not universally use U = 3nRT/2.",
    "example": {
      "prompt": "Find the internal energy of $2.00\\,\\mathrm{mol}$ monatomic ideal gas at $300\\,\\mathrm K$.",
      "steps": [
        "$U=\\tfrac32nRT=\\tfrac32(2.00)(8.314)(300)=7.48\\times10^3\\,\\mathrm J$.",
        "Per molecule, $\\langle K\\rangle=\\tfrac32(1.380649\\times10^{-23})(300)=6.21\\times10^{-21}\\,\\mathrm J$."
      ],
      "check": "At the same temperature, different gas species have the same mean translational energy, not the same RMS speed."
    }
  },
  "RMS molecular speed": {
    "meaning": "RMS speed is the square root of the mean of squared molecular speeds. It is not the arithmetic mean speed and not a speed shared by all molecules.",
    "variables": [
      {
        "symbol": "v_{\\mathrm{rms}}",
        "meaning": "Root-mean-square molecular speed",
        "unit": "m/s"
      },
      {
        "symbol": "k_B",
        "meaning": "Boltzmann constant",
        "unit": "J/K"
      },
      {
        "symbol": "T",
        "meaning": "Absolute temperature",
        "unit": "K"
      },
      {
        "symbol": "m",
        "meaning": "Mass of one molecule",
        "unit": "kg"
      },
      {
        "symbol": "R",
        "meaning": "Universal gas constant",
        "unit": "J/(mol K)"
      },
      {
        "symbol": "M",
        "meaning": "Molar mass (not single-particle mass)",
        "unit": "kg/mol"
      }
    ],
    "when": "Equilibrium ideal gas. Use kB with molecular mass or R with molar mass. Convert g/mol to kg/mol before numerical substitution.",
    "example": {
      "prompt": "Find RMS speed for nitrogen with $M=0.0280\\,\\mathrm{kg/mol}$ at $300\\,\\mathrm K$.",
      "steps": [
        "$v_{rms}=\\sqrt{3RT/M}=\\sqrt{3(8.314)(300)/0.0280}=517\\,\\mathrm{m/s}$.",
        "At $1200\\,\\mathrm K$ it would double, because speed scales as $\\sqrt T$."
      ],
      "check": "Lighter molecules have larger RMS speed at the same temperature."
    }
  },
  "Latent heat": {
    "meaning": "During a phase change, energy changes phase fraction rather than temperature. Specific latent heat states the required energy per kilogram.",
    "variables": [
      {
        "symbol": "Q",
        "meaning": "Signed heat transferred into material",
        "unit": "J"
      },
      {
        "symbol": "m",
        "meaning": "Mass actually undergoing transition",
        "unit": "kg"
      },
      {
        "symbol": "L",
        "meaning": "Positive specific latent heat for the named transition",
        "unit": "J/kg"
      }
    ],
    "when": "Use the latent heat for the correct transition and conditions. Q = +mL for melting/vaporization; Q = −mL for freezing/condensation. Partial change uses only the converted mass.",
    "example": {
      "prompt": "Freeze $0.100\\,\\mathrm{kg}$ of water at zero Celsius. Use $L_f=3.34\\times10^5\\,\\mathrm{J/kg}$.",
      "steps": [
        "$Q_{water}=-mL_f=-0.100(3.34\\times10^5)=-3.34\\times10^4\\,\\mathrm J$.",
        "The surroundings receive $+3.34\\times10^4\\,\\mathrm J$."
      ],
      "check": "Temperature remains at the transition point while both phases coexist at the given pressure."
    }
  },
  "Ice to warm water": {
    "meaning": "Thermal stages must be added: warm solid to melting point, melt it, then warm the resulting liquid. Different phases use different heat capacities.",
    "variables": [
      {
        "symbol": "Q_{\\mathrm{tot}}",
        "meaning": "Total heat supplied",
        "unit": "J"
      },
      {
        "symbol": "m",
        "meaning": "Ice/water mass",
        "unit": "kg"
      },
      {
        "symbol": "c_i,c_w",
        "meaning": "Specific heat of ice and liquid water",
        "unit": "J/(kg K)"
      },
      {
        "symbol": "T_i",
        "meaning": "Initial ice temperature below zero Celsius",
        "unit": "°C"
      },
      {
        "symbol": "T_f",
        "meaning": "Final liquid temperature above zero Celsius",
        "unit": "°C"
      },
      {
        "symbol": "L_f",
        "meaning": "Specific latent heat of fusion",
        "unit": "J/kg"
      }
    ],
    "when": "Ordinary melting point 0 °C, complete melting, no heat loss and no vaporization. If insufficient heat is supplied, stop at the appropriate earlier stage.",
    "example": {
      "prompt": "Convert $0.100\\,\\mathrm{kg}$ of ice at $-10.0^\\circ\\mathrm C$ to water at $20.0^\\circ\\mathrm C$. Use $c_i=2100$, $c_w=4186$, $L_f=334000$ in SI.",
      "steps": [
        "$Q_1=0.100(2100)(10)=2100\\,\\mathrm J$.",
        "$Q_2=0.100(334000)=33400\\,\\mathrm J$.",
        "$Q_3=0.100(4186)(20)=8372\\,\\mathrm J$.",
        "$Q_{tot}=43872\\,\\mathrm J\\approx43.9\\,\\mathrm{kJ}$."
      ],
      "check": "Most energy here goes into melting, not warming the ice."
    }
  },
  "Coulomb force magnitude": {
    "meaning": "Each point charge exerts a force on the other along their connecting line. Magnitudes follow an inverse-square law; signs determine attraction or repulsion.",
    "variables": [
      {
        "symbol": "F",
        "meaning": "Electrostatic force magnitude",
        "unit": "N"
      },
      {
        "symbol": "k_e",
        "meaning": "Coulomb constant, approximately 8.99 × 10⁹",
        "unit": "N m²/C²"
      },
      {
        "symbol": "q_1,q_2",
        "meaning": "Signed source and other charges",
        "unit": "C"
      },
      {
        "symbol": "r",
        "meaning": "Center-to-center separation",
        "unit": "m"
      }
    ],
    "when": "Point charges at rest, or outside spherically symmetric distributions; vacuum/air approximation. For multiple charges sum vectors of individual forces.",
    "example": {
      "prompt": "Charges $+1.00\\,\\mu\\mathrm C$ and $+2.00\\,\\mu\\mathrm C$ are $0.100\\,\\mathrm m$ apart.",
      "steps": [
        "Convert microcoulombs: $q_1=1.00\\times10^{-6}\\,\\mathrm C$, $q_2=2.00\\times10^{-6}\\,\\mathrm C$.",
        "$F=8.99\\times10^9(1.00\\times10^{-6})(2.00\\times10^{-6})/0.100^2=1.80\\,\\mathrm N$.",
        "The charges repel; each experiences the same magnitude in opposite directions."
      ],
      "check": "Doubling the separation would divide the force by four, not two."
    }
  },
  "Field and force": {
    "meaning": "The field describes the environment made by sources. Multiplying it by a chosen test charge gives the force on that charge.",
    "variables": [
      {
        "symbol": "\\vec E",
        "meaning": "Electric field vector at observation point",
        "unit": "N/C"
      },
      {
        "symbol": "\\vec F",
        "meaning": "Electric force on test charge",
        "unit": "N"
      },
      {
        "symbol": "q_{\\mathrm{test}},q",
        "meaning": "Signed test charge",
        "unit": "C"
      }
    ],
    "when": "The test charge should be small enough not to rearrange sources. Electric force alone determines acceleration only if other forces are negligible.",
    "example": {
      "prompt": "A charge $q=-3.00\\,\\mu\\mathrm C$ is in a $200\\,\\mathrm{N/C}$ field to the right.",
      "steps": [
        "Take right positive: $F_x=qE_x=(-3.00\\times10^{-6})(200)=-6.00\\times10^{-4}\\,\\mathrm N$.",
        "The force is leftward; the field direction is still rightward."
      ],
      "check": "Changing the test charge changes its force, not the pre-existing source field."
    }
  },
  "Point-charge field magnitude": {
    "meaning": "Field strength from one source decreases with distance squared. Its direction is defined by the force on a hypothetical positive charge.",
    "variables": [
      {
        "symbol": "E",
        "meaning": "Electric field magnitude",
        "unit": "N/C"
      },
      {
        "symbol": "k_e",
        "meaning": "Coulomb constant",
        "unit": "N m²/C²"
      },
      {
        "symbol": "Q",
        "meaning": "Signed source charge",
        "unit": "C"
      },
      {
        "symbol": "r",
        "meaning": "Distance from source center to observation point",
        "unit": "m"
      }
    ],
    "when": "Point source or external point of spherical symmetry. Direction is away from positive Q and toward negative Q; the magnitude formula itself is nonnegative.",
    "example": {
      "prompt": "Find the field $0.200\\,\\mathrm m$ to the right of a $-2.00\\,\\mu\\mathrm C$ source.",
      "steps": [
        "$E=k_e|Q|/r^2=8.99\\times10^9(2.00\\times10^{-6})/0.200^2=4.50\\times10^5\\,\\mathrm{N/C}$.",
        "It points left, toward the negative source."
      ],
      "check": "The source sign changes direction, not the positive magnitude."
    }
  },
  "Superposition": {
    "meaning": "Fields and forces add component by component. Cancellation is directional, so a sum of magnitudes usually gives the wrong answer.",
    "variables": [
      {
        "symbol": "\\vec E_{\\mathrm{net}}",
        "meaning": "Resultant electric field",
        "unit": "N/C"
      },
      {
        "symbol": "\\vec E_i",
        "meaning": "Field contribution from source i",
        "unit": "N/C"
      },
      {
        "symbol": "\\vec F_{\\mathrm{net}}",
        "meaning": "Resultant force on chosen charge",
        "unit": "N"
      },
      {
        "symbol": "\\vec F_i",
        "meaning": "Force contribution from interaction i",
        "unit": "N"
      },
      {
        "symbol": "\\sum_i",
        "meaning": "Sum over all sources/interactions",
        "unit": "No unit"
      }
    ],
    "when": "Compute each contribution using its own distance and direction, then add signed x/y components. Net zero field does not mean individual fields are absent.",
    "example": {
      "prompt": "At a point, one source produces $300\\,\\mathrm{N/C}$ right and another produces $400\\,\\mathrm{N/C}$ up.",
      "steps": [
        "$E_x=300$, $E_y=400\\,\\mathrm{N/C}$.",
        "$E=\\sqrt{300^2+400^2}=500\\,\\mathrm{N/C}$.",
        "$\\theta=\\tan^{-1}(400/300)=53.1^\\circ$ above +x."
      ],
      "check": "Do not add 300 + 400: these contributions are perpendicular."
    }
  }
};
