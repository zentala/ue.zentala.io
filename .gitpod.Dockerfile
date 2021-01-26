FROM gitpod/workspace-full

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

# ZSH
RUN sudo apt-get update && \
    sudo apt-get install -y zsh
ENV ZSH_THEME cloud
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh

# NVM
RUN bash -c ". .nvm/nvm.sh \
    && nvm install 10 \
    && nvm use 10 \
    && nvm alias default 10"
RUN echo "nvm use default &>/dev/null" >> ~/.zshrc
