export const Header = () => {
  return (
    <div className="w-[1440px] h-[68px] ">
      <div className="w-[1280px] h-[36] px-0 py-1 flex justify-between px-8 bg-neutral-200;">
        <div className="flex items-center gap-6">
          {/* <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p> */}
          <div className="flex items-center pl-6 gap-4">
            <svg
              width="1440"
              height="68"
              viewBox="0 0 1440 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M114.83 36.1044V32.3544L129.83 25.7493V30.0639L119.56 34.1868L119.699 33.9631V34.4957L119.56 34.272L129.83 38.3949V42.7095L114.83 36.1044ZM145.658 29.4567C145.572 28.5973 145.207 27.9297 144.56 27.4538C143.914 26.978 143.037 26.7401 141.929 26.7401C141.176 26.7401 140.54 26.8466 140.022 27.0597C139.504 27.2656 139.106 27.5533 138.829 27.9226C138.559 28.2919 138.424 28.7109 138.424 29.1797C138.41 29.5703 138.491 29.9112 138.669 30.2024C138.854 30.4936 139.106 30.7457 139.425 30.9588C139.745 31.1648 140.114 31.3459 140.533 31.5021C140.952 31.6513 141.4 31.7791 141.876 31.8857L143.836 32.3544C144.788 32.5675 145.661 32.8516 146.457 33.2067C147.252 33.5618 147.941 33.9986 148.523 34.517C149.106 35.0355 149.557 35.6463 149.876 36.3494C150.203 37.0526 150.37 37.8587 150.377 38.7678C150.37 40.103 150.029 41.2607 149.354 42.2408C148.687 43.2138 147.721 43.9702 146.457 44.5099C145.2 45.0426 143.683 45.3089 141.908 45.3089C140.146 45.3089 138.612 45.0391 137.305 44.4993C136.006 43.9595 134.99 43.1605 134.258 42.1023C133.534 41.0369 133.154 39.7195 133.119 38.1499H137.582C137.632 38.8814 137.842 39.4922 138.211 39.9822C138.587 40.4652 139.088 40.831 139.713 41.0795C140.345 41.321 141.059 41.4418 141.854 41.4418C142.636 41.4418 143.314 41.3281 143.889 41.1009C144.472 40.8736 144.923 40.5575 145.242 40.1527C145.562 39.7479 145.722 39.2827 145.722 38.7571C145.722 38.267 145.576 37.8551 145.285 37.5213C145.001 37.1875 144.582 36.9034 144.028 36.669C143.481 36.4347 142.81 36.2216 142.014 36.0298L139.638 35.4332C137.799 34.9858 136.347 34.2862 135.281 33.3345C134.216 32.3828 133.687 31.1009 133.694 29.4886C133.687 28.1676 134.038 27.0135 134.749 26.0263C135.466 25.0391 136.45 24.2685 137.7 23.7145C138.95 23.1605 140.37 22.8835 141.961 22.8835C143.58 22.8835 144.994 23.1605 146.201 23.7145C147.415 24.2685 148.36 25.0391 149.035 26.0263C149.709 27.0135 150.057 28.157 150.079 29.4567H145.658ZM164.716 29.4567C164.631 28.5973 164.265 27.9297 163.619 27.4538C162.972 26.978 162.095 26.7401 160.987 26.7401C160.234 26.7401 159.599 26.8466 159.08 27.0597C158.562 27.2656 158.164 27.5533 157.887 27.9226C157.617 28.2919 157.482 28.7109 157.482 29.1797C157.468 29.5703 157.55 29.9112 157.727 30.2024C157.912 30.4936 158.164 30.7457 158.484 30.9588C158.803 31.1648 159.173 31.3459 159.592 31.5021C160.011 31.6513 160.458 31.7791 160.934 31.8857L162.894 32.3544C163.846 32.5675 164.719 32.8516 165.515 33.2067C166.31 33.5618 166.999 33.9986 167.582 34.517C168.164 35.0355 168.615 35.6463 168.935 36.3494C169.261 37.0526 169.428 37.8587 169.435 38.7678C169.428 40.103 169.087 41.2607 168.413 42.2408C167.745 43.2138 166.779 43.9702 165.515 44.5099C164.258 45.0426 162.741 45.3089 160.966 45.3089C159.204 45.3089 157.67 45.0391 156.364 44.4993C155.064 43.9595 154.048 43.1605 153.317 42.1023C152.592 41.0369 152.212 39.7195 152.177 38.1499H156.641C156.69 38.8814 156.9 39.4922 157.269 39.9822C157.646 40.4652 158.146 40.831 158.771 41.0795C159.403 41.321 160.117 41.4418 160.913 41.4418C161.694 41.4418 162.372 41.3281 162.947 41.1009C163.53 40.8736 163.981 40.5575 164.3 40.1527C164.62 39.7479 164.78 39.2827 164.78 38.7571C164.78 38.267 164.634 37.8551 164.343 37.5213C164.059 37.1875 163.64 36.9034 163.086 36.669C162.539 36.4347 161.868 36.2216 161.072 36.0298L158.697 35.4332C156.857 34.9858 155.405 34.2862 154.339 33.3345C153.274 32.3828 152.745 31.1009 152.752 29.4886C152.745 28.1676 153.097 27.0135 153.807 26.0263C154.524 25.0391 155.508 24.2685 156.758 23.7145C158.008 23.1605 159.428 22.8835 161.019 22.8835C162.638 22.8835 164.052 23.1605 165.259 23.7145C166.474 24.2685 167.418 25.0391 168.093 26.0263C168.768 27.0135 169.116 28.157 169.137 29.4567H164.716ZM187.699 22.1591L180.668 48.2812H176.758L183.789 22.1591H187.699ZM205.17 38.1499L190.17 44.755V40.4403L200.44 36.3175L200.301 36.5412V36.0085L200.44 36.2322L190.17 32.1094V27.7947L205.17 34.3999V38.1499Z"
                fill="#111827"
              />
              <path
                d="M776.261 40H774.398L778.585 28.3636H780.614L784.801 40H782.938L779.648 30.4773H779.557L776.261 40ZM776.574 35.4432H782.619V36.9205H776.574V35.4432ZM786.482 40V28.3636H788.18V32.6875H788.283C788.381 32.5057 788.523 32.2955 788.709 32.0568C788.894 31.8182 789.152 31.6098 789.482 31.4318C789.811 31.25 790.247 31.1591 790.788 31.1591C791.493 31.1591 792.122 31.3371 792.675 31.6932C793.228 32.0492 793.661 32.5625 793.976 33.233C794.294 33.9034 794.453 34.7102 794.453 35.6534C794.453 36.5966 794.296 37.4053 793.982 38.0795C793.667 38.75 793.235 39.267 792.686 39.6307C792.137 39.9905 791.51 40.1705 790.805 40.1705C790.275 40.1705 789.841 40.0814 789.504 39.9034C789.171 39.7254 788.91 39.517 788.72 39.2784C788.531 39.0398 788.385 38.8277 788.283 38.642H788.141V40H786.482ZM788.146 35.6364C788.146 36.25 788.235 36.7879 788.413 37.25C788.591 37.7121 788.849 38.0739 789.186 38.3352C789.523 38.5928 789.936 38.7216 790.425 38.7216C790.932 38.7216 791.357 38.5871 791.697 38.3182C792.038 38.0455 792.296 37.6761 792.47 37.2102C792.648 36.7443 792.737 36.2197 792.737 35.6364C792.737 35.0606 792.65 34.5436 792.476 34.0852C792.305 33.6269 792.048 33.2652 791.703 33C791.362 32.7348 790.936 32.6023 790.425 32.6023C789.932 32.6023 789.516 32.7292 789.175 32.983C788.838 33.2367 788.582 33.5909 788.408 34.0455C788.233 34.5 788.146 35.0303 788.146 35.6364ZM800.037 40.1761C799.219 40.1761 798.505 39.9886 797.895 39.6136C797.285 39.2386 796.812 38.714 796.474 38.0398C796.137 37.3655 795.969 36.5777 795.969 35.6761C795.969 34.7708 796.137 33.9792 796.474 33.3011C796.812 32.6231 797.285 32.0966 797.895 31.7216C798.505 31.3466 799.219 31.1591 800.037 31.1591C800.855 31.1591 801.569 31.3466 802.179 31.7216C802.789 32.0966 803.262 32.6231 803.599 33.3011C803.937 33.9792 804.105 34.7708 804.105 35.6761C804.105 36.5777 803.937 37.3655 803.599 38.0398C803.262 38.714 802.789 39.2386 802.179 39.6136C801.569 39.9886 800.855 40.1761 800.037 40.1761ZM800.043 38.75C800.573 38.75 801.012 38.6098 801.361 38.3295C801.709 38.0492 801.967 37.6761 802.134 37.2102C802.304 36.7443 802.389 36.2311 802.389 35.6705C802.389 35.1136 802.304 34.6023 802.134 34.1364C801.967 33.6667 801.709 33.2898 801.361 33.0057C801.012 32.7216 800.573 32.5795 800.043 32.5795C799.509 32.5795 799.065 32.7216 798.713 33.0057C798.365 33.2898 798.105 33.6667 797.935 34.1364C797.768 34.6023 797.685 35.1136 797.685 35.6705C797.685 36.2311 797.768 36.7443 797.935 37.2102C798.105 37.6761 798.365 38.0492 798.713 38.3295C799.065 38.6098 799.509 38.75 800.043 38.75ZM811.53 36.3807V31.2727H813.234V40H811.564V38.4886H811.473C811.272 38.9545 810.95 39.3428 810.507 39.6534C810.068 39.9602 809.52 40.1136 808.865 40.1136C808.304 40.1136 807.808 39.9905 807.376 39.7443C806.948 39.4943 806.611 39.125 806.365 38.6364C806.123 38.1477 806.001 37.5436 806.001 36.8239V31.2727H807.7V36.6193C807.7 37.214 807.865 37.6875 808.195 38.0398C808.524 38.392 808.952 38.5682 809.479 38.5682C809.797 38.5682 810.113 38.4886 810.428 38.3295C810.746 38.1705 811.009 37.9299 811.217 37.608C811.429 37.286 811.534 36.8769 811.53 36.3807ZM819.591 31.2727V32.6364H814.824V31.2727H819.591ZM816.102 29.1818H817.801V37.4375C817.801 37.767 817.85 38.0152 817.949 38.1818C818.047 38.3447 818.174 38.4564 818.33 38.517C818.489 38.5739 818.661 38.6023 818.847 38.6023C818.983 38.6023 819.102 38.5928 819.205 38.5739C819.307 38.5549 819.386 38.5398 819.443 38.5284L819.75 39.9318C819.652 39.9697 819.511 40.0076 819.33 40.0455C819.148 40.0871 818.92 40.1098 818.648 40.1136C818.201 40.1212 817.784 40.0417 817.398 39.875C817.011 39.7083 816.699 39.4508 816.46 39.1023C816.222 38.7538 816.102 38.3163 816.102 37.7898V29.1818Z"
                fill="#4B5563"
              />
              <path
                d="M848.557 40L845.33 28.3636H847.176L849.443 37.375H849.551L851.909 28.3636H853.739L856.097 37.3807H856.205L858.466 28.3636H860.318L857.085 40H855.318L852.869 31.2841H852.778L850.33 40H848.557ZM864.599 40.1761C863.781 40.1761 863.067 39.9886 862.457 39.6136C861.848 39.2386 861.374 38.714 861.037 38.0398C860.7 37.3655 860.531 36.5777 860.531 35.6761C860.531 34.7708 860.7 33.9792 861.037 33.3011C861.374 32.6231 861.848 32.0966 862.457 31.7216C863.067 31.3466 863.781 31.1591 864.599 31.1591C865.418 31.1591 866.132 31.3466 866.741 31.7216C867.351 32.0966 867.825 32.6231 868.162 33.3011C868.499 33.9792 868.668 34.7708 868.668 35.6761C868.668 36.5777 868.499 37.3655 868.162 38.0398C867.825 38.714 867.351 39.2386 866.741 39.6136C866.132 39.9886 865.418 40.1761 864.599 40.1761ZM864.605 38.75C865.135 38.75 865.575 38.6098 865.923 38.3295C866.272 38.0492 866.529 37.6761 866.696 37.2102C866.866 36.7443 866.952 36.2311 866.952 35.6705C866.952 35.1136 866.866 34.6023 866.696 34.1364C866.529 33.6667 866.272 33.2898 865.923 33.0057C865.575 32.7216 865.135 32.5795 864.605 32.5795C864.071 32.5795 863.628 32.7216 863.276 33.0057C862.927 33.2898 862.668 33.6667 862.497 34.1364C862.33 34.6023 862.247 35.1136 862.247 35.6705C862.247 36.2311 862.33 36.7443 862.497 37.2102C862.668 37.6761 862.927 38.0492 863.276 38.3295C863.628 38.6098 864.071 38.75 864.605 38.75ZM870.564 40V31.2727H872.206V32.6591H872.297C872.456 32.1894 872.736 31.8201 873.138 31.5511C873.543 31.2784 874.001 31.142 874.513 31.142C874.619 31.142 874.744 31.1458 874.888 31.1534C875.036 31.161 875.151 31.1705 875.234 31.1818V32.8068C875.166 32.7879 875.045 32.767 874.871 32.7443C874.696 32.7178 874.522 32.7045 874.348 32.7045C873.946 32.7045 873.589 32.7898 873.274 32.9602C872.964 33.1269 872.717 33.3598 872.536 33.6591C872.354 33.9545 872.263 34.2917 872.263 34.6705V40H870.564ZM878.267 37.0398L878.256 34.9659H878.551L882.028 31.2727H884.062L880.097 35.4773H879.83L878.267 37.0398ZM876.705 40V28.3636H878.403V40H876.705ZM882.216 40L879.091 35.8523L880.261 34.6648L884.301 40H882.216Z"
                fill="#4B5563"
              />
              <path
                d="M909.705 29.875V28.3636H918.71V29.875H915.08V40H913.33V29.875H909.705ZM923.06 40.1761C922.2 40.1761 921.459 39.9924 920.838 39.625C920.221 39.2538 919.743 38.733 919.406 38.0625C919.073 37.3883 918.906 36.5985 918.906 35.6932C918.906 34.7992 919.073 34.0114 919.406 33.3295C919.743 32.6477 920.213 32.1155 920.815 31.733C921.421 31.3504 922.13 31.1591 922.94 31.1591C923.433 31.1591 923.91 31.2405 924.372 31.4034C924.834 31.5663 925.249 31.822 925.616 32.1705C925.984 32.5189 926.274 32.9716 926.486 33.5284C926.698 34.0814 926.804 34.7538 926.804 35.5455V36.1477H919.866V34.875H925.139C925.139 34.428 925.048 34.0322 924.866 33.6875C924.685 33.339 924.429 33.0644 924.099 32.8636C923.774 32.6629 923.391 32.5625 922.952 32.5625C922.474 32.5625 922.058 32.6799 921.702 32.9148C921.349 33.1458 921.077 33.4489 920.884 33.8239C920.694 34.1951 920.599 34.5985 920.599 35.0341V36.0284C920.599 36.6117 920.702 37.108 920.906 37.517C921.115 37.9261 921.404 38.2386 921.776 38.4545C922.147 38.6667 922.58 38.7727 923.077 38.7727C923.399 38.7727 923.692 38.7273 923.957 38.6364C924.223 38.5417 924.452 38.4015 924.645 38.2159C924.838 38.0303 924.986 37.8011 925.088 37.5284L926.696 37.8182C926.567 38.2917 926.336 38.7064 926.003 39.0625C925.673 39.4148 925.259 39.6894 924.759 39.8864C924.262 40.0795 923.696 40.1761 923.06 40.1761ZM935.229 33.4034L933.689 33.6761C933.625 33.4792 933.522 33.2917 933.382 33.1136C933.246 32.9356 933.06 32.7898 932.825 32.6761C932.59 32.5625 932.297 32.5057 931.945 32.5057C931.464 32.5057 931.062 32.6136 930.74 32.8295C930.418 33.0417 930.257 33.3163 930.257 33.6534C930.257 33.9451 930.365 34.1799 930.581 34.358C930.797 34.536 931.145 34.6818 931.626 34.7955L933.013 35.1136C933.816 35.2992 934.414 35.5852 934.808 35.9716C935.202 36.358 935.399 36.8598 935.399 37.4773C935.399 38 935.248 38.4659 934.945 38.875C934.645 39.2803 934.227 39.5985 933.689 39.8295C933.155 40.0606 932.536 40.1761 931.831 40.1761C930.854 40.1761 930.056 39.9678 929.439 39.5511C928.821 39.1307 928.443 38.5341 928.303 37.7614L929.945 37.5114C930.047 37.9394 930.257 38.2633 930.575 38.483C930.893 38.6989 931.308 38.8068 931.82 38.8068C932.376 38.8068 932.821 38.6913 933.155 38.4602C933.488 38.2254 933.655 37.9394 933.655 37.6023C933.655 37.3295 933.553 37.1004 933.348 36.9148C933.147 36.7292 932.839 36.589 932.422 36.4943L930.945 36.1705C930.13 35.9848 929.528 35.6894 929.138 35.2841C928.751 34.8788 928.558 34.3655 928.558 33.7443C928.558 33.2292 928.702 32.7784 928.99 32.392C929.278 32.0057 929.676 31.7045 930.183 31.4886C930.691 31.2689 931.272 31.1591 931.928 31.1591C932.871 31.1591 933.613 31.3636 934.155 31.7727C934.696 32.178 935.054 32.7216 935.229 33.4034ZM941.341 31.2727V32.6364H936.574V31.2727H941.341ZM937.852 29.1818H939.551V37.4375C939.551 37.767 939.6 38.0152 939.699 38.1818C939.797 38.3447 939.924 38.4564 940.08 38.517C940.239 38.5739 940.411 38.6023 940.597 38.6023C940.733 38.6023 940.852 38.5928 940.955 38.5739C941.057 38.5549 941.136 38.5398 941.193 38.5284L941.5 39.9318C941.402 39.9697 941.261 40.0076 941.08 40.0455C940.898 40.0871 940.67 40.1098 940.398 40.1136C939.951 40.1212 939.534 40.0417 939.148 39.875C938.761 39.7083 938.449 39.4508 938.21 39.1023C937.972 38.7538 937.852 38.3163 937.852 37.7898V29.1818ZM943.22 40V31.2727H944.919V40H943.22ZM944.078 29.9261C943.783 29.9261 943.529 29.8277 943.317 29.6307C943.108 29.4299 943.004 29.1913 943.004 28.9148C943.004 28.6345 943.108 28.3958 943.317 28.1989C943.529 27.9981 943.783 27.8977 944.078 27.8977C944.374 27.8977 944.625 27.9981 944.834 28.1989C945.046 28.3958 945.152 28.6345 945.152 28.9148C945.152 29.1913 945.046 29.4299 944.834 29.6307C944.625 29.8277 944.374 29.9261 944.078 29.9261ZM947.205 40V31.2727H948.835V32.6932H948.943C949.125 32.2121 949.422 31.8371 949.835 31.5682C950.248 31.2955 950.742 31.1591 951.318 31.1591C951.902 31.1591 952.39 31.2955 952.784 31.5682C953.182 31.8409 953.475 32.2159 953.665 32.6932H953.756C953.964 32.2273 954.295 31.8561 954.75 31.5795C955.205 31.2992 955.746 31.1591 956.375 31.1591C957.167 31.1591 957.812 31.4072 958.312 31.9034C958.816 32.3996 959.068 33.1477 959.068 34.1477V40H957.369V34.3068C957.369 33.7159 957.208 33.2879 956.886 33.0227C956.564 32.7576 956.18 32.625 955.733 32.625C955.18 32.625 954.75 32.7955 954.443 33.1364C954.136 33.4735 953.983 33.9072 953.983 34.4375V40H952.29V34.1989C952.29 33.7254 952.142 33.3447 951.847 33.0568C951.551 32.7689 951.167 32.625 950.693 32.625C950.371 32.625 950.074 32.7102 949.801 32.8807C949.532 33.0473 949.314 33.2803 949.148 33.5795C948.985 33.8788 948.903 34.2254 948.903 34.6193V40H947.205ZM965.021 40.1761C964.203 40.1761 963.489 39.9886 962.879 39.6136C962.269 39.2386 961.796 38.714 961.459 38.0398C961.122 37.3655 960.953 36.5777 960.953 35.6761C960.953 34.7708 961.122 33.9792 961.459 33.3011C961.796 32.6231 962.269 32.0966 962.879 31.7216C963.489 31.3466 964.203 31.1591 965.021 31.1591C965.839 31.1591 966.554 31.3466 967.163 31.7216C967.773 32.0966 968.247 32.6231 968.584 33.3011C968.921 33.9792 969.089 34.7708 969.089 35.6761C969.089 36.5777 968.921 37.3655 968.584 38.0398C968.247 38.714 967.773 39.2386 967.163 39.6136C966.554 39.9886 965.839 40.1761 965.021 40.1761ZM965.027 38.75C965.557 38.75 965.997 38.6098 966.345 38.3295C966.694 38.0492 966.951 37.6761 967.118 37.2102C967.288 36.7443 967.374 36.2311 967.374 35.6705C967.374 35.1136 967.288 34.6023 967.118 34.1364C966.951 33.6667 966.694 33.2898 966.345 33.0057C965.997 32.7216 965.557 32.5795 965.027 32.5795C964.493 32.5795 964.05 32.7216 963.697 33.0057C963.349 33.2898 963.089 33.6667 962.919 34.1364C962.752 34.6023 962.669 35.1136 962.669 35.6705C962.669 36.2311 962.752 36.7443 962.919 37.2102C963.089 37.6761 963.349 38.0492 963.697 38.3295C964.05 38.6098 964.493 38.75 965.027 38.75ZM972.685 34.8182V40H970.986V31.2727H972.616V32.6932H972.724C972.925 32.2311 973.24 31.8598 973.668 31.5795C974.099 31.2992 974.643 31.1591 975.298 31.1591C975.893 31.1591 976.414 31.2841 976.861 31.5341C977.308 31.7803 977.654 32.1477 977.901 32.6364C978.147 33.125 978.27 33.7292 978.27 34.4489V40H976.571V34.6534C976.571 34.0208 976.406 33.5265 976.077 33.1705C975.747 32.8106 975.295 32.6307 974.719 32.6307C974.325 32.6307 973.974 32.7159 973.668 32.8864C973.365 33.0568 973.124 33.3068 972.946 33.6364C972.772 33.9621 972.685 34.3561 972.685 34.8182ZM980.548 40V31.2727H982.247V40H980.548ZM981.406 29.9261C981.111 29.9261 980.857 29.8277 980.645 29.6307C980.437 29.4299 980.332 29.1913 980.332 28.9148C980.332 28.6345 980.437 28.3958 980.645 28.1989C980.857 27.9981 981.111 27.8977 981.406 27.8977C981.702 27.8977 981.954 27.9981 982.162 28.1989C982.374 28.3958 982.48 28.6345 982.48 28.9148C982.48 29.1913 982.374 29.4299 982.162 29.6307C981.954 29.8277 981.702 29.9261 981.406 29.9261ZM987.072 40.1932C986.519 40.1932 986.019 40.0909 985.572 39.8864C985.125 39.678 984.771 39.3769 984.51 38.983C984.252 38.589 984.124 38.1061 984.124 37.5341C984.124 37.0417 984.218 36.6364 984.408 36.3182C984.597 36 984.853 35.7481 985.175 35.5625C985.497 35.3769 985.857 35.2367 986.254 35.142C986.652 35.0473 987.057 34.9754 987.47 34.9261C987.993 34.8655 988.417 34.8163 988.743 34.7784C989.069 34.7367 989.305 34.6705 989.453 34.5795C989.601 34.4886 989.675 34.3409 989.675 34.1364V34.0966C989.675 33.6004 989.535 33.2159 989.254 32.9432C988.978 32.6705 988.565 32.5341 988.016 32.5341C987.444 32.5341 986.993 32.661 986.663 32.9148C986.338 33.1648 986.112 33.4432 985.987 33.75L984.391 33.3864C984.58 32.8561 984.857 32.428 985.22 32.1023C985.588 31.7727 986.01 31.5341 986.487 31.3864C986.964 31.2348 987.466 31.1591 987.993 31.1591C988.341 31.1591 988.711 31.2008 989.101 31.2841C989.495 31.3636 989.862 31.5114 990.203 31.7273C990.548 31.9432 990.83 32.2519 991.05 32.6534C991.269 33.0511 991.379 33.5682 991.379 34.2045V40H989.72V38.8068H989.652C989.542 39.0265 989.377 39.2424 989.158 39.4545C988.938 39.6667 988.656 39.8428 988.311 39.983C987.966 40.1231 987.554 40.1932 987.072 40.1932ZM987.442 38.8295C987.911 38.8295 988.313 38.7367 988.646 38.5511C988.983 38.3655 989.239 38.1231 989.413 37.8239C989.591 37.5208 989.68 37.197 989.68 36.8523V35.7273C989.62 35.7879 989.502 35.8447 989.328 35.8977C989.158 35.947 988.963 35.9905 988.743 36.0284C988.523 36.0625 988.309 36.0947 988.101 36.125C987.893 36.1515 987.718 36.1742 987.578 36.1932C987.249 36.2348 986.947 36.3049 986.675 36.4034C986.406 36.5019 986.19 36.6439 986.027 36.8295C985.868 37.0114 985.788 37.2538 985.788 37.5568C985.788 37.9773 985.944 38.2955 986.254 38.5114C986.565 38.7235 986.961 38.8295 987.442 38.8295ZM995.341 28.3636V40H993.642V28.3636H995.341ZM1004.17 33.4034L1002.63 33.6761C1002.56 33.4792 1002.46 33.2917 1002.32 33.1136C1002.18 32.9356 1002 32.7898 1001.76 32.6761C1001.53 32.5625 1001.23 32.5057 1000.88 32.5057C1000.4 32.5057 1000 32.6136 999.678 32.8295C999.356 33.0417 999.195 33.3163 999.195 33.6534C999.195 33.9451 999.303 34.1799 999.518 34.358C999.734 34.536 1000.08 34.6818 1000.56 34.7955L1001.95 35.1136C1002.75 35.2992 1003.35 35.5852 1003.75 35.9716C1004.14 36.358 1004.34 36.8598 1004.34 37.4773C1004.34 38 1004.19 38.4659 1003.88 38.875C1003.58 39.2803 1003.16 39.5985 1002.63 39.8295C1002.09 40.0606 1001.47 40.1761 1000.77 40.1761C999.791 40.1761 998.994 39.9678 998.376 39.5511C997.759 39.1307 997.38 38.5341 997.24 37.7614L998.882 37.5114C998.984 37.9394 999.195 38.2633 999.513 38.483C999.831 38.6989 1000.25 38.8068 1000.76 38.8068C1001.31 38.8068 1001.76 38.6913 1002.09 38.4602C1002.43 38.2254 1002.59 37.9394 1002.59 37.6023C1002.59 37.3295 1002.49 37.1004 1002.29 36.9148C1002.08 36.7292 1001.78 36.589 1001.36 36.4943L999.882 36.1705C999.068 35.9848 998.465 35.6894 998.075 35.2841C997.689 34.8788 997.496 34.3655 997.496 33.7443C997.496 33.2292 997.64 32.7784 997.928 32.392C998.215 32.0057 998.613 31.7045 999.121 31.4886C999.628 31.2689 1000.21 31.1591 1000.87 31.1591C1001.81 31.1591 1002.55 31.3636 1003.09 31.7727C1003.63 32.178 1003.99 32.7216 1004.17 33.4034Z"
                fill="#4B5563"
              />
              <path
                d="M1040.94 32.1477H1039.17C1039.1 31.7689 1038.98 31.4356 1038.79 31.1477C1038.6 30.8598 1038.38 30.6155 1038.11 30.4148C1037.84 30.214 1037.54 30.0625 1037.2 29.9602C1036.88 29.858 1036.52 29.8068 1036.15 29.8068C1035.48 29.8068 1034.88 29.9754 1034.35 30.3125C1033.83 30.6496 1033.41 31.1439 1033.1 31.7955C1032.8 32.447 1032.65 33.2424 1032.65 34.1818C1032.65 35.1288 1032.8 35.928 1033.1 36.5795C1033.41 37.2311 1033.83 37.7235 1034.36 38.0568C1034.89 38.3902 1035.48 38.5568 1036.15 38.5568C1036.52 38.5568 1036.86 38.5076 1037.19 38.4091C1037.53 38.3068 1037.83 38.1572 1038.1 37.9602C1038.37 37.7633 1038.59 37.5227 1038.78 37.2386C1038.97 36.9508 1039.1 36.6212 1039.17 36.25L1040.94 36.2557C1040.85 36.8277 1040.66 37.3542 1040.39 37.8352C1040.12 38.3125 1039.78 38.7254 1039.35 39.0739C1038.93 39.4186 1038.45 39.6856 1037.91 39.875C1037.37 40.0644 1036.78 40.1591 1036.14 40.1591C1035.13 40.1591 1034.23 39.9205 1033.44 39.4432C1032.66 38.9621 1032.03 38.2746 1031.58 37.3807C1031.13 36.4867 1030.9 35.4205 1030.9 34.1818C1030.9 32.9394 1031.13 31.8731 1031.59 30.983C1032.04 30.089 1032.66 29.4034 1033.45 28.9261C1034.24 28.4451 1035.13 28.2045 1036.14 28.2045C1036.75 28.2045 1037.33 28.2936 1037.86 28.4716C1038.4 28.6458 1038.88 28.9034 1039.31 29.2443C1039.74 29.5814 1040.09 29.9943 1040.38 30.483C1040.66 30.9678 1040.84 31.5227 1040.94 32.1477ZM1046.58 40.1761C1045.77 40.1761 1045.05 39.9886 1044.44 39.6136C1043.83 39.2386 1043.36 38.714 1043.02 38.0398C1042.68 37.3655 1042.52 36.5777 1042.52 35.6761C1042.52 34.7708 1042.68 33.9792 1043.02 33.3011C1043.36 32.6231 1043.83 32.0966 1044.44 31.7216C1045.05 31.3466 1045.77 31.1591 1046.58 31.1591C1047.4 31.1591 1048.12 31.3466 1048.73 31.7216C1049.34 32.0966 1049.81 32.6231 1050.15 33.3011C1050.48 33.9792 1050.65 34.7708 1050.65 35.6761C1050.65 36.5777 1050.48 37.3655 1050.15 38.0398C1049.81 38.714 1049.34 39.2386 1048.73 39.6136C1048.12 39.9886 1047.4 40.1761 1046.58 40.1761ZM1046.59 38.75C1047.12 38.75 1047.56 38.6098 1047.91 38.3295C1048.26 38.0492 1048.51 37.6761 1048.68 37.2102C1048.85 36.7443 1048.94 36.2311 1048.94 35.6705C1048.94 35.1136 1048.85 34.6023 1048.68 34.1364C1048.51 33.6667 1048.26 33.2898 1047.91 33.0057C1047.56 32.7216 1047.12 32.5795 1046.59 32.5795C1046.06 32.5795 1045.61 32.7216 1045.26 33.0057C1044.91 33.2898 1044.65 33.6667 1044.48 34.1364C1044.31 34.6023 1044.23 35.1136 1044.23 35.6705C1044.23 36.2311 1044.31 36.7443 1044.48 37.2102C1044.65 37.6761 1044.91 38.0492 1045.26 38.3295C1045.61 38.6098 1046.06 38.75 1046.59 38.75ZM1054.25 34.8182V40H1052.55V31.2727H1054.18V32.6932H1054.29C1054.49 32.2311 1054.8 31.8598 1055.23 31.5795C1055.66 31.2992 1056.21 31.1591 1056.86 31.1591C1057.46 31.1591 1057.98 31.2841 1058.42 31.5341C1058.87 31.7803 1059.22 32.1477 1059.46 32.6364C1059.71 33.125 1059.83 33.7292 1059.83 34.4489V40H1058.13V34.6534C1058.13 34.0208 1057.97 33.5265 1057.64 33.1705C1057.31 32.8106 1056.86 32.6307 1056.28 32.6307C1055.89 32.6307 1055.54 32.7159 1055.23 32.8864C1054.93 33.0568 1054.69 33.3068 1054.51 33.6364C1054.33 33.9621 1054.25 34.3561 1054.25 34.8182ZM1066.18 31.2727V32.6364H1061.42V31.2727H1066.18ZM1062.7 29.1818H1064.39V37.4375C1064.39 37.767 1064.44 38.0152 1064.54 38.1818C1064.64 38.3447 1064.77 38.4564 1064.92 38.517C1065.08 38.5739 1065.25 38.6023 1065.44 38.6023C1065.58 38.6023 1065.7 38.5928 1065.8 38.5739C1065.9 38.5549 1065.98 38.5398 1066.04 38.5284L1066.34 39.9318C1066.25 39.9697 1066.11 40.0076 1065.92 40.0455C1065.74 40.0871 1065.51 40.1098 1065.24 40.1136C1064.79 40.1212 1064.38 40.0417 1063.99 39.875C1063.61 39.7083 1063.29 39.4508 1063.05 39.1023C1062.82 38.7538 1062.7 38.3163 1062.7 37.7898V29.1818ZM1070.6 40.1932C1070.05 40.1932 1069.55 40.0909 1069.1 39.8864C1068.66 39.678 1068.3 39.3769 1068.04 38.983C1067.78 38.589 1067.65 38.1061 1067.65 37.5341C1067.65 37.0417 1067.75 36.6364 1067.94 36.3182C1068.13 36 1068.38 35.7481 1068.71 35.5625C1069.03 35.3769 1069.39 35.2367 1069.79 35.142C1070.18 35.0473 1070.59 34.9754 1071 34.9261C1071.52 34.8655 1071.95 34.8163 1072.27 34.7784C1072.6 34.7367 1072.84 34.6705 1072.98 34.5795C1073.13 34.4886 1073.21 34.3409 1073.21 34.1364V34.0966C1073.21 33.6004 1073.07 33.2159 1072.79 32.9432C1072.51 32.6705 1072.1 32.5341 1071.55 32.5341C1070.97 32.5341 1070.52 32.661 1070.19 32.9148C1069.87 33.1648 1069.64 33.4432 1069.52 33.75L1067.92 33.3864C1068.11 32.8561 1068.39 32.428 1068.75 32.1023C1069.12 31.7727 1069.54 31.5341 1070.02 31.3864C1070.5 31.2348 1071 31.1591 1071.52 31.1591C1071.87 31.1591 1072.24 31.2008 1072.63 31.2841C1073.03 31.3636 1073.39 31.5114 1073.73 31.7273C1074.08 31.9432 1074.36 32.2519 1074.58 32.6534C1074.8 33.0511 1074.91 33.5682 1074.91 34.2045V40H1073.25V38.8068H1073.18C1073.07 39.0265 1072.91 39.2424 1072.69 39.4545C1072.47 39.6667 1072.19 39.8428 1071.84 39.983C1071.5 40.1231 1071.08 40.1932 1070.6 40.1932ZM1070.97 38.8295C1071.44 38.8295 1071.84 38.7367 1072.18 38.5511C1072.51 38.3655 1072.77 38.1231 1072.94 37.8239C1073.12 37.5208 1073.21 37.197 1073.21 36.8523V35.7273C1073.15 35.7879 1073.03 35.8447 1072.86 35.8977C1072.69 35.947 1072.49 35.9905 1072.27 36.0284C1072.05 36.0625 1071.84 36.0947 1071.63 36.125C1071.42 36.1515 1071.25 36.1742 1071.11 36.1932C1070.78 36.2348 1070.48 36.3049 1070.21 36.4034C1069.94 36.5019 1069.72 36.6439 1069.56 36.8295C1069.4 37.0114 1069.32 37.2538 1069.32 37.5568C1069.32 37.9773 1069.47 38.2955 1069.79 38.5114C1070.1 38.7235 1070.49 38.8295 1070.97 38.8295ZM1080.85 40.1761C1080 40.1761 1079.28 39.9848 1078.67 39.6023C1078.06 39.2159 1077.6 38.6837 1077.27 38.0057C1076.94 37.3277 1076.78 36.5511 1076.78 35.6761C1076.78 34.7898 1076.95 34.0076 1077.28 33.3295C1077.61 32.6477 1078.08 32.1155 1078.69 31.733C1079.3 31.3504 1080.01 31.1591 1080.83 31.1591C1081.5 31.1591 1082.09 31.2822 1082.61 31.5284C1083.12 31.7708 1083.54 32.1117 1083.86 32.5511C1084.18 32.9905 1084.37 33.5038 1084.43 34.0909H1082.78C1082.69 33.6818 1082.48 33.3295 1082.16 33.0341C1081.83 32.7386 1081.4 32.5909 1080.86 32.5909C1080.39 32.5909 1079.97 32.7159 1079.62 32.9659C1079.26 33.2121 1078.99 33.5644 1078.79 34.0227C1078.6 34.4773 1078.5 35.0152 1078.5 35.6364C1078.5 36.2727 1078.59 36.822 1078.79 37.2841C1078.98 37.7462 1079.25 38.1042 1079.61 38.358C1079.96 38.6117 1080.38 38.7386 1080.86 38.7386C1081.18 38.7386 1081.47 38.6799 1081.74 38.5625C1082 38.4413 1082.22 38.2689 1082.4 38.0455C1082.58 37.822 1082.71 37.553 1082.78 37.2386H1084.43C1084.37 37.803 1084.19 38.3068 1083.88 38.75C1083.58 39.1932 1083.17 39.5417 1082.65 39.7955C1082.14 40.0492 1081.54 40.1761 1080.85 40.1761ZM1090.33 31.2727V32.6364H1085.56V31.2727H1090.33ZM1086.84 29.1818H1088.54V37.4375C1088.54 37.767 1088.58 38.0152 1088.68 38.1818C1088.78 38.3447 1088.91 38.4564 1089.06 38.517C1089.22 38.5739 1089.4 38.6023 1089.58 38.6023C1089.72 38.6023 1089.84 38.5928 1089.94 38.5739C1090.04 38.5549 1090.12 38.5398 1090.18 38.5284L1090.48 39.9318C1090.39 39.9697 1090.25 40.0076 1090.06 40.0455C1089.88 40.0871 1089.65 40.1098 1089.38 40.1136C1088.94 40.1212 1088.52 40.0417 1088.13 39.875C1087.75 39.7083 1087.43 39.4508 1087.19 39.1023C1086.96 38.7538 1086.84 38.3163 1086.84 37.7898V29.1818Z"
                fill="#4B5563"
              />
              <line x1="1115.5" y1="46" x2="1115.5" y2="22" stroke="#F3F4F6" />
              <path
                d="M1158 38C1160.21 38 1162 36.2091 1162 34C1162 31.7909 1160.21 30 1158 30C1155.79 30 1154 31.7909 1154 34C1154 36.2091 1155.79 38 1158 38Z"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1158 24V26"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1158 42V44"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1150.93 26.93L1152.34 28.34"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1163.66 39.66L1165.07 41.07"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1148 34H1150"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1166 34H1168"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1152.34 39.66L1150.93 41.07"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1165.07 26.93L1163.66 28.34"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="1192"
                y="16"
                width="136"
                height="36"
                rx="12"
                fill="#111827"
              />
              <path
                d="M1213.05 40H1209.28V28.3636H1213.16C1214.3 28.3636 1215.28 28.5966 1216.1 29.0625C1216.92 29.5246 1217.55 30.1894 1217.98 31.0568C1218.42 31.9205 1218.64 32.9564 1218.64 34.1648C1218.64 35.3769 1218.42 36.4186 1217.98 37.2898C1217.54 38.161 1216.9 38.8314 1216.07 39.3011C1215.23 39.767 1214.23 40 1213.05 40ZM1211.03 38.4659H1212.95C1213.84 38.4659 1214.57 38.2992 1215.16 37.9659C1215.75 37.6288 1216.19 37.142 1216.48 36.5057C1216.77 35.8655 1216.91 35.0852 1216.91 34.1648C1216.91 33.2519 1216.77 32.4773 1216.48 31.8409C1216.19 31.2045 1215.76 30.7216 1215.19 30.392C1214.62 30.0625 1213.91 29.8977 1213.06 29.8977H1211.03V38.4659ZM1224.37 40.1761C1223.55 40.1761 1222.83 39.9886 1222.22 39.6136C1221.61 39.2386 1221.14 38.714 1220.8 38.0398C1220.47 37.3655 1220.3 36.5777 1220.3 35.6761C1220.3 34.7708 1220.47 33.9792 1220.8 33.3011C1221.14 32.6231 1221.61 32.0966 1222.22 31.7216C1222.83 31.3466 1223.55 31.1591 1224.37 31.1591C1225.18 31.1591 1225.9 31.3466 1226.51 31.7216C1227.12 32.0966 1227.59 32.6231 1227.93 33.3011C1228.26 33.9792 1228.43 34.7708 1228.43 35.6761C1228.43 36.5777 1228.26 37.3655 1227.93 38.0398C1227.59 38.714 1227.12 39.2386 1226.51 39.6136C1225.9 39.9886 1225.18 40.1761 1224.37 40.1761ZM1224.37 38.75C1224.9 38.75 1225.34 38.6098 1225.69 38.3295C1226.04 38.0492 1226.29 37.6761 1226.46 37.2102C1226.63 36.7443 1226.72 36.2311 1226.72 35.6705C1226.72 35.1136 1226.63 34.6023 1226.46 34.1364C1226.29 33.6667 1226.04 33.2898 1225.69 33.0057C1225.34 32.7216 1224.9 32.5795 1224.37 32.5795C1223.84 32.5795 1223.39 32.7216 1223.04 33.0057C1222.69 33.2898 1222.43 33.6667 1222.26 34.1364C1222.1 34.6023 1222.01 35.1136 1222.01 35.6705C1222.01 36.2311 1222.1 36.7443 1222.26 37.2102C1222.43 37.6761 1222.69 38.0492 1223.04 38.3295C1223.39 38.6098 1223.84 38.75 1224.37 38.75ZM1231.96 40L1229.39 31.2727H1231.14L1232.85 37.6818H1232.94L1234.65 31.2727H1236.41L1238.12 37.6534H1238.2L1239.9 31.2727H1241.65L1239.09 40H1237.36L1235.59 33.6989H1235.46L1233.68 40H1231.96ZM1244.97 34.8182V40H1243.27V31.2727H1244.9V32.6932H1245.01C1245.21 32.2311 1245.52 31.8598 1245.95 31.5795C1246.38 31.2992 1246.92 31.1591 1247.58 31.1591C1248.17 31.1591 1248.7 31.2841 1249.14 31.5341C1249.59 31.7803 1249.94 32.1477 1250.18 32.6364C1250.43 33.125 1250.55 33.7292 1250.55 34.4489V40H1248.85V34.6534C1248.85 34.0208 1248.69 33.5265 1248.36 33.1705C1248.03 32.8106 1247.58 32.6307 1247 32.6307C1246.61 32.6307 1246.26 32.7159 1245.95 32.8864C1245.65 33.0568 1245.41 33.3068 1245.23 33.6364C1245.05 33.9621 1244.97 34.3561 1244.97 34.8182ZM1254.53 28.3636V40H1252.83V28.3636H1254.53ZM1260.49 40.1761C1259.67 40.1761 1258.96 39.9886 1258.35 39.6136C1257.74 39.2386 1257.26 38.714 1256.93 38.0398C1256.59 37.3655 1256.42 36.5777 1256.42 35.6761C1256.42 34.7708 1256.59 33.9792 1256.93 33.3011C1257.26 32.6231 1257.74 32.0966 1258.35 31.7216C1258.96 31.3466 1259.67 31.1591 1260.49 31.1591C1261.31 31.1591 1262.02 31.3466 1262.63 31.7216C1263.24 32.0966 1263.72 32.6231 1264.05 33.3011C1264.39 33.9792 1264.56 34.7708 1264.56 35.6761C1264.56 36.5777 1264.39 37.3655 1264.05 38.0398C1263.72 38.714 1263.24 39.2386 1262.63 39.6136C1262.02 39.9886 1261.31 40.1761 1260.49 40.1761ZM1260.5 38.75C1261.03 38.75 1261.47 38.6098 1261.81 38.3295C1262.16 38.0492 1262.42 37.6761 1262.59 37.2102C1262.76 36.7443 1262.84 36.2311 1262.84 35.6705C1262.84 35.1136 1262.76 34.6023 1262.59 34.1364C1262.42 33.6667 1262.16 33.2898 1261.81 33.0057C1261.47 32.7216 1261.03 32.5795 1260.5 32.5795C1259.96 32.5795 1259.52 32.7216 1259.17 33.0057C1258.82 33.2898 1258.56 33.6667 1258.39 34.1364C1258.22 34.6023 1258.14 35.1136 1258.14 35.6705C1258.14 36.2311 1258.22 36.7443 1258.39 37.2102C1258.56 37.6761 1258.82 38.0492 1259.17 38.3295C1259.52 38.6098 1259.96 38.75 1260.5 38.75ZM1268.99 40.1932C1268.44 40.1932 1267.94 40.0909 1267.49 39.8864C1267.05 39.678 1266.69 39.3769 1266.43 38.983C1266.17 38.589 1266.05 38.1061 1266.05 37.5341C1266.05 37.0417 1266.14 36.6364 1266.33 36.3182C1266.52 36 1266.77 35.7481 1267.1 35.5625C1267.42 35.3769 1267.78 35.2367 1268.18 35.142C1268.57 35.0473 1268.98 34.9754 1269.39 34.9261C1269.91 34.8655 1270.34 34.8163 1270.66 34.7784C1270.99 34.7367 1271.23 34.6705 1271.38 34.5795C1271.52 34.4886 1271.6 34.3409 1271.6 34.1364V34.0966C1271.6 33.6004 1271.46 33.2159 1271.18 32.9432C1270.9 32.6705 1270.49 32.5341 1269.94 32.5341C1269.37 32.5341 1268.91 32.661 1268.59 32.9148C1268.26 33.1648 1268.03 33.4432 1267.91 33.75L1266.31 33.3864C1266.5 32.8561 1266.78 32.428 1267.14 32.1023C1267.51 31.7727 1267.93 31.5341 1268.41 31.3864C1268.89 31.2348 1269.39 31.1591 1269.91 31.1591C1270.26 31.1591 1270.63 31.2008 1271.02 31.2841C1271.42 31.3636 1271.78 31.5114 1272.12 31.7273C1272.47 31.9432 1272.75 32.2519 1272.97 32.6534C1273.19 33.0511 1273.3 33.5682 1273.3 34.2045V40H1271.64V38.8068H1271.57C1271.46 39.0265 1271.3 39.2424 1271.08 39.4545C1270.86 39.6667 1270.58 39.8428 1270.23 39.983C1269.89 40.1231 1269.48 40.1932 1268.99 40.1932ZM1269.36 38.8295C1269.83 38.8295 1270.23 38.7367 1270.57 38.5511C1270.91 38.3655 1271.16 38.1231 1271.34 37.8239C1271.51 37.5208 1271.6 37.197 1271.6 36.8523V35.7273C1271.54 35.7879 1271.42 35.8447 1271.25 35.8977C1271.08 35.947 1270.88 35.9905 1270.66 36.0284C1270.45 36.0625 1270.23 36.0947 1270.02 36.125C1269.81 36.1515 1269.64 36.1742 1269.5 36.1932C1269.17 36.2348 1268.87 36.3049 1268.6 36.4034C1268.33 36.5019 1268.11 36.6439 1267.95 36.8295C1267.79 37.0114 1267.71 37.2538 1267.71 37.5568C1267.71 37.9773 1267.87 38.2955 1268.18 38.5114C1268.49 38.7235 1268.88 38.8295 1269.36 38.8295ZM1278.83 40.1705C1278.13 40.1705 1277.5 39.9905 1276.94 39.6307C1276.4 39.267 1275.96 38.75 1275.65 38.0795C1275.34 37.4053 1275.18 36.5966 1275.18 35.6534C1275.18 34.7102 1275.34 33.9034 1275.65 33.233C1275.97 32.5625 1276.41 32.0492 1276.96 31.6932C1277.51 31.3371 1278.14 31.1591 1278.84 31.1591C1279.38 31.1591 1279.82 31.25 1280.15 31.4318C1280.48 31.6098 1280.74 31.8182 1280.92 32.0568C1281.11 32.2955 1281.25 32.5057 1281.35 32.6875H1281.46V28.3636H1283.15V40H1281.5V38.642H1281.35C1281.25 38.8277 1281.1 39.0398 1280.91 39.2784C1280.72 39.517 1280.46 39.7254 1280.13 39.9034C1279.79 40.0814 1279.36 40.1705 1278.83 40.1705ZM1279.21 38.7216C1279.69 38.7216 1280.11 38.5928 1280.44 38.3352C1280.79 38.0739 1281.04 37.7121 1281.22 37.25C1281.4 36.7879 1281.48 36.25 1281.48 35.6364C1281.48 35.0303 1281.4 34.5 1281.22 34.0455C1281.05 33.5909 1280.79 33.2367 1280.46 32.983C1280.12 32.7292 1279.7 32.6023 1279.21 32.6023C1278.69 32.6023 1278.27 32.7348 1277.93 33C1277.59 33.2652 1277.33 33.6269 1277.15 34.0852C1276.98 34.5436 1276.9 35.0606 1276.9 35.6364C1276.9 36.2197 1276.99 36.7443 1277.16 37.2102C1277.33 37.6761 1277.59 38.0455 1277.93 38.3182C1278.28 38.5871 1278.7 38.7216 1279.21 38.7216ZM1299.62 32.1477H1297.84C1297.77 31.7689 1297.65 31.4356 1297.46 31.1477C1297.28 30.8598 1297.05 30.6155 1296.78 30.4148C1296.51 30.214 1296.21 30.0625 1295.88 29.9602C1295.55 29.858 1295.2 29.8068 1294.83 29.8068C1294.15 29.8068 1293.55 29.9754 1293.02 30.3125C1292.5 30.6496 1292.08 31.1439 1291.77 31.7955C1291.47 32.447 1291.32 33.2424 1291.32 34.1818C1291.32 35.1288 1291.47 35.928 1291.77 36.5795C1292.08 37.2311 1292.5 37.7235 1293.03 38.0568C1293.56 38.3902 1294.16 38.5568 1294.82 38.5568C1295.19 38.5568 1295.54 38.5076 1295.87 38.4091C1296.2 38.3068 1296.5 38.1572 1296.77 37.9602C1297.04 37.7633 1297.26 37.5227 1297.45 37.2386C1297.64 36.9508 1297.77 36.6212 1297.84 36.25L1299.62 36.2557C1299.52 36.8277 1299.34 37.3542 1299.06 37.8352C1298.79 38.3125 1298.45 38.7254 1298.02 39.0739C1297.6 39.4186 1297.12 39.6856 1296.58 39.875C1296.04 40.0644 1295.45 40.1591 1294.81 40.1591C1293.8 40.1591 1292.9 39.9205 1292.12 39.4432C1291.33 38.9621 1290.71 38.2746 1290.25 37.3807C1289.8 36.4867 1289.58 35.4205 1289.58 34.1818C1289.58 32.9394 1289.8 31.8731 1290.26 30.983C1290.71 30.089 1291.33 29.4034 1292.12 28.9261C1292.91 28.4451 1293.8 28.2045 1294.81 28.2045C1295.43 28.2045 1296 28.2936 1296.54 28.4716C1297.07 28.6458 1297.56 28.9034 1297.98 29.2443C1298.41 29.5814 1298.77 29.9943 1299.05 30.483C1299.33 30.9678 1299.52 31.5227 1299.62 32.1477ZM1302.73 28.3636L1305.97 37.8409H1306.1L1309.34 28.3636H1311.24L1307.05 40H1305.02L1300.84 28.3636H1302.73Z"
                fill="#F9FAFB"
              />
            </svg>
            {/* <button className="w-34 h-9 bg-gray-900 text-gray-50 rounded-xl	px-4">
              Download CV
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
