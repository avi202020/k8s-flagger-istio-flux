(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{382:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"install-flux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-flux"}},[t._v("#")]),t._v(" Install Flux")]),t._v(" "),a("p",[t._v("Create registry secret for accessing Azure Container Registry\nin "),a("code",[t._v("flux")]),t._v(" namespace:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl create namespace flux\nkubectl create secret --namespace flux docker-registry docker-config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --docker-server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pruzickak8smyexampledev.azurecr.io"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --docker-username"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${ARM_CLIENT_ID}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --docker-password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${ARM_CLIENT_SECRET}")]),t._v('"')]),t._v("\n")])])]),a("p",[t._v("Flux Architecture:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/fluxcd/flux/raw/18e5174581f44ed8c9a881dd5071179eed1ebf4d/docs/_files/flux-cd-diagram.png",alt:"Flux Architecture",title:"Flux Architecture"}})]),t._v(" "),a("p",[t._v("Create git repository which will be used by Flux in GitHub:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("hub create -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Flux repository for k8s-flagger-istio-flux"')]),t._v(" -h "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://ruzickap.github.io/k8s-flagger-istio-flux/"')]),t._v(" ruzickap/k8s-flux-repository\n")])])]),a("p",[t._v("Output:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("A git remote named 'origin' already exists and is set to push to 'ssh://git@github.com/ruzickap/k8s-flagger-istio-flux.git'.\nhttps://github.com/ruzickap/k8s-flux-repository\n")])])]),a("p",[t._v("Clone the git repository:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" tmp\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^github.com "')]),t._v(" ~/.ssh/known_hosts"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" ssh-keyscan github.com "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.ssh/known_hosts "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v("/dev/null"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"petr.ruzicka@gmail.com"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" -C tmp clone git@github.com:ruzickap/k8s-flux-repository.git\n")])])]),a("p",[t._v("Output:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Cloning into 'k8s-flux-repository'...\nwarning: You appear to have cloned an empty repository.\n")])])]),a("p",[t._v("Create initial Flux repository structure and add it into the git repository:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -v files/flux-repository/README.md tmp/k8s-flux-repository/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -v tmp/k8s-flux-repository/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("namespaces,releases,workloads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" -C tmp/k8s-flux-repository "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" -C tmp/k8s-flux-repository commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Initial commit"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" -C tmp/k8s-flux-repository push -q\n")])])]),a("p",[t._v("Output:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("'files/flux-repository/README.md' -> 'tmp/k8s-flux-repository/README.md'\nmkdir: created directory 'tmp/k8s-flux-repository/namespaces'\nmkdir: created directory 'tmp/k8s-flux-repository/releases'\nmkdir: created directory 'tmp/k8s-flux-repository/workloads'\n[master (root-commit) 01ec748] Initial commit\n 1 file changed, 1 insertion(+)\n create mode 100644 README.md\n")])])]),a("p",[t._v("Add the Flux repository:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("helm repo "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" fluxcd https://charts.fluxcd.io\nhelm update\n")])])]),a("p",[t._v("Output:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"fluxcd" has been added to your repositories\nCommand "update" is deprecated, use \'helm repo update\'\n\nHang tight while we grab the latest from your chart repositories...\n...Skip local chart repository\n...Successfully got an update from the "fluxcd" chart repository\n...Successfully got an update from the "stable" chart repository\nUpdate Complete.\n')])])]),a("p",[t._v("Apply the Helm Release CRD:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl apply -f https://raw.githubusercontent.com/fluxcd/flux/helm-0.10.1/deploy-helm/flux-helm-release-crd.yaml\n")])])]),a("p",[t._v("Output:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("customresourcedefinition.apiextensions.k8s.io/helmreleases.flux.weave.works created\n")])])]),a("p",[t._v("Install Flux:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("helm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --name flux --namespace flux --wait --version "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.14")]),t._v(".1 fluxcd/flux "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set git.email"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"petr.ruzicka@gmail.com"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set git.url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git@github.com:ruzickap/k8s-flux-repository"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set git.user"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Flux"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set helmOperator.create"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set helmOperator.createCRD"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set registry.dockercfg.configFileName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dockercfg/config.json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set registry.dockercfg.enabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set registry.dockercfg.secretName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docker-config"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set registry.pollInterval"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10s"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --set syncGarbageCollection.enabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n")])])]),a("p",[t._v("Output:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("NAME:   flux\nLAST DEPLOYED: Thu Aug 29 09:39:10 2019\nNAMESPACE: flux\nSTATUS: DEPLOYED\n\nRESOURCES:\n==> v1/ConfigMap\nNAME              DATA  AGE\nflux-kube-config  1     16s\n\n==> v1/Deployment\nNAME                READY  UP-TO-DATE  AVAILABLE  AGE\nflux                1/1    1           1          16s\nflux-helm-operator  1/1    1           1          16s\nflux-memcached      1/1    1           1          16s\n\n==> v1/Pod(related)\nNAME                                 READY  STATUS   RESTARTS  AGE\nflux-bbb76576-8clvg                  1/1    Running  0         16s\nflux-helm-operator-6877b9f564-rt5rl  1/1    Running  0         16s\nflux-memcached-88db78d9d-vnrl7       1/1    Running  0         16s\n\n==> v1/Secret\nNAME             TYPE    DATA  AGE\nflux-git-deploy  Opaque  1     16s\n\n==> v1/Service\nNAME            TYPE       CLUSTER-IP      EXTERNAL-IP  PORT(S)    AGE\nflux            ClusterIP  100.70.220.201  <none>       3030/TCP   16s\nflux-memcached  ClusterIP  100.64.195.153  <none>       11211/TCP  16s\n\n==> v1/ServiceAccount\nNAME  SECRETS  AGE\nflux  1        16s\n\n==> v1beta1/ClusterRole\nNAME  AGE\nflux  16s\n\n==> v1beta1/ClusterRoleBinding\nNAME  AGE\nflux  16s\n\n\nNOTES:\nGet the Git deploy key by either (a) running\n\n  kubectl -n flux logs deployment/flux | grep identity.pub | cut -d '\"' -f2\n\nor by (b) installing fluxctl through\nhttps://github.com/weaveworks/flux/blob/master/docs/references/fluxctl.md#installing-fluxctl\nand running:\n\n  fluxctl identity\n")])])]),a("p",[t._v("Install "),a("a",{attrs:{href:"https://docs.fluxcd.io/en/stable/references/fluxctl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("fluxctl"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" -x /usr/local/bin/fluxctl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://github.com/fluxcd/flux/releases/download/1.14.2/fluxctl_linux_amd64 -o /usr/local/bin/fluxctl\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" a+x /usr/local/bin/fluxctl\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n")])])]),a("p",[t._v("Set the namespace ("),a("code",[t._v("flux")]),t._v(") where flux was installed for running "),a("code",[t._v("fluxctl")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FLUX_FORWARD_NAMESPACE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flux"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FLUX_TIMEOUT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10m0s"')]),t._v("\n")])])]),a("p",[t._v("Obtain the ssh public key through "),a("code",[t._v("fluxctl")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("fluxctl identity\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -x /usr/bin/chromium-browser "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" chromium-browser https://github.com/ruzickap/k8s-flux-repository/settings/keys/new "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n")])])]),a("p",[t._v("Output:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCyGvcJPcFxvsc9SHtJiOt7G6pvNQgmcf+PIIfy6PoEvXK2naXmKw68+dtKeIoMzvp63QxoNB+B6qamMbkWqaVCjS4glAXKmf68k/eCazcPNZaQRmL/YUmgmyZ8AF02fDmM/RQMz/2hUtUE6UYs/T5vYUdDwYb09nOmVMgclY6jbmQ4b0OgG18p6RnNYtJ4wysC6+wEoy5xVljKWRE03UxD3pJbVdk5KPcJ/mnX44tUwU/oE/Ezz7LaMjVXnXns8zKu3LOAIeolcCFVJUbUMQhOuvwrXp+Sag1VV3OG4Uy6P3/0wIajEumzHO4GvpAEJ1F1Ny4b692wP/TdUX/WWAIr\n")])])]),a("p",[t._v('Add the ssh key to the GitHub "'),a("a",{attrs:{href:"https://github.com/ruzickap/k8s-flux-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ruzickap/k8s-flux-repository"),a("OutboundLink")],1),t._v('"\n-> "Settings" -> "Deploy keys" -> "Add new" -> "Allow write access"')]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/fluxcd/flux/18e5174581f44ed8c9a881dd5071179eed1ebf4d/docs/_files/flux.svg?sanitize=true",alt:"Flux logo",title:"Flux logo"}})]),t._v(" "),a("hr")])}),[],!1,null,null,null);s.default=r.exports}}]);