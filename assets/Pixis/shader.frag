precision highp float;
uniform sampler2D uSampler;
uniform vec2 resolution;
uniform float brightness; //smaller is brighter
uniform vec2 submarine;

varying vec2 vTextureCoord;
varying vec4 vColor;


void main(void)
{
   mediump float maxdist = length(resolution);

   vec2 uv = gl_FragCoord.xy/resolution;
   
   mediump float test = (distance(submarine, uv.xy));
   //float intensity = pow(test, 10.0);

   //vec2 pixel = gl_FragCoord.xy / resolution.xy;
   vec4 color = texture2D(uSampler, vTextureCoord);
   //vec3 glow = glowColor * intensity;
   //gl_FragColor = color;
   gl_FragColor = vec4(test,0.0,0.0, 1.0);
}
