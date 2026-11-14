import{b as W,T as X}from"./index-DCvkBhdL.js";import{s as Z,a as $,b as ee,c as se,d as oe}from"./index-CUbOysQp.js";import{b as K,B as N,m as h,q as L,o as c,c as m,R as te,N as ae,O as ie,v as ne,w as re,x as v,G as u,I as q,a as o,C as P,y as k,D as le,A as p,J as de,T as ce,_ as ue,K as l,E as r,F as D,H as V,t as me,P as pe,L as b,z as T,Q as ge}from"./index-CRqfJ_qR.js";import{a as fe,b as w}from"./api-4-EWMPlw.js";import{s as be}from"./index-bphgdqiw.js";import{s as ve}from"./index-Czef7l04.js";import{s as he}from"./index-B0kY9eHr.js";var ye=K`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,xe={root:function(e){var i=e.instance,d=e.props;return["p-textarea p-component",{"p-filled":i.$filled,"p-textarea-resizable ":d.autoResize,"p-textarea-sm p-inputfield-sm":d.size==="small","p-textarea-lg p-inputfield-lg":d.size==="large","p-invalid":i.$invalid,"p-variant-filled":i.$variant==="filled","p-textarea-fluid":i.$fluid}]}},we=N.extend({name:"textarea",style:ye,classes:xe}),ke={name:"BaseTextarea",extends:fe,props:{autoResize:Boolean},style:we,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function C(s){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(s)}function Ce(s,e,i){return(e=Se(e))in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}function Se(s){var e=ze(s,"string");return C(e)=="symbol"?e:e+""}function ze(s,e){if(C(s)!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var d=i.call(s,e);if(C(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}var F={name:"Textarea",extends:ke,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){e.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return h(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return L(Ce({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},_e=["value","name","disabled","aria-invalid","data-p"];function Pe(s,e,i,d,t,n){return c(),m("textarea",h({class:s.cx("root"),value:s.d_value,name:s.name,disabled:s.disabled,"aria-invalid":s.invalid||void 0,"data-p":n.dataP,onInput:e[0]||(e[0]=function(){return n.onInput&&n.onInput.apply(n,arguments)})},n.attrs),null,16,_e)}F.render=Pe;var Te=K`
    .p-message {
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
        height: 100%;
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-enter-from {
        opacity: 0;
    }

    .p-message-enter-active {
        transition: opacity 0.3s;
    }

    .p-message.p-message-leave-from {
        max-height: 1000px;
    }

    .p-message.p-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin: 0;
    }

    .p-message-leave-active {
        overflow: hidden;
        transition:
            max-height 0.45s cubic-bezier(0, 1, 0, 1),
            opacity 0.3s,
            margin 0.3s;
    }

    .p-message-leave-active .p-message-close-button {
        opacity: 0;
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }
`,qe={root:function(e){var i=e.props;return["p-message p-component p-message-"+i.severity,{"p-message-outlined":i.variant==="outlined","p-message-simple":i.variant==="simple","p-message-sm":i.size==="small","p-message-lg":i.size==="large"}]},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Ae=N.extend({name:"message",style:Te,classes:qe}),Ie={name:"BaseMessage",extends:ie,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:Ae,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function S(s){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(s)}function B(s,e,i){return(e=Oe(e))in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}function Oe(s){var e=je(s,"string");return S(e)=="symbol"?e:e+""}function je(s,e){if(S(s)!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var d=i.call(s,e);if(S(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}var M={name:"Message",extends:Ie,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit("life-end")},this.life)},methods:{close:function(e){this.visible=!1,this.$emit("close",e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return L(B(B({outlined:this.variant==="outlined",simple:this.variant==="simple"},this.severity,this.severity),this.size,this.size))}},directives:{ripple:te},components:{TimesIcon:ae}};function z(s){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(s)}function R(s,e){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(s);e&&(d=d.filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable})),i.push.apply(i,d)}return i}function E(s){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?R(Object(i),!0).forEach(function(d){De(s,d,i[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):R(Object(i)).forEach(function(d){Object.defineProperty(s,d,Object.getOwnPropertyDescriptor(i,d))})}return s}function De(s,e,i){return(e=Ve(e))in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}function Ve(s){var e=Be(s,"string");return z(e)=="symbol"?e:e+""}function Be(s,e){if(z(s)!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var d=i.call(s,e);if(z(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}var Re=["data-p"],Ee=["data-p"],Ke=["data-p"],Ne=["aria-label","data-p"],Le=["data-p"];function Fe(s,e,i,d,t,n){var g=ne("TimesIcon"),f=re("ripple");return c(),v(ce,h({name:"p-message",appear:""},s.ptmi("transition")),{default:u(function(){return[q(o("div",h({class:s.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true","data-p":n.dataP},s.ptm("root")),[s.$slots.container?P(s.$slots,"container",{key:0,closeCallback:n.close}):(c(),m("div",h({key:1,class:s.cx("content"),"data-p":n.dataP},s.ptm("content")),[P(s.$slots,"icon",{class:k(s.cx("icon"))},function(){return[(c(),v(le(s.icon?"span":null),h({class:[s.cx("icon"),s.icon],"data-p":n.dataP},s.ptm("icon")),null,16,["class","data-p"]))]}),s.$slots.default?(c(),m("div",h({key:0,class:s.cx("text"),"data-p":n.dataP},s.ptm("text")),[P(s.$slots,"default")],16,Ke)):p("",!0),s.closable?q((c(),m("button",h({key:1,class:s.cx("closeButton"),"aria-label":n.closeAriaLabel,type:"button",onClick:e[0]||(e[0]=function(x){return n.close(x)}),"data-p":n.dataP},E(E({},s.closeButtonProps),s.ptm("closeButton"))),[P(s.$slots,"closeicon",{},function(){return[s.closeIcon?(c(),m("i",h({key:0,class:[s.cx("closeIcon"),s.closeIcon],"data-p":n.dataP},s.ptm("closeIcon")),null,16,Le)):(c(),v(g,h({key:1,class:[s.cx("closeIcon"),s.closeIcon],"data-p":n.dataP},s.ptm("closeIcon")),null,16,["class","data-p"]))]})],16,Ne)),[[f]]):p("",!0)],16,Ee))],16,Re),[[de,t.visible]])]}),_:3},16)}M.render=Fe;const Me={Sucesso:"success",Erro:"danger",Timeout:"warn",Processando:"info",Pendente:"secondary"},Ue={data(){return{carregado:!1,dialogConfig:!1,mostrarAvancado:!1,salvando:!1,filtroStatus:null,requisicaoSelecionada:null,agente:{nome:"",modelo:"",temperatura:null,maxTokens:null,timeout:null,diretrizes:"",promptLegado:!1,apiKeyConfigurada:!1,apiKeyMasked:""},formConfig:{},conexao:{status:null,mensagem:"",testando:!1},testeDialog:{status:null,mensagem:"",testando:!1},sugestoesModelo:["gemini-2.5-flash","gemini-2.5-flash-lite","gemini-2.5-pro","gemini-2.0-flash"],opcoesStatus:["Sucesso","Erro","Timeout","Processando","Pendente"],kpis:[],consumoClientes:[],requisicoes:[]}},computed:{requisicoesFiltradas(){return this.filtroStatus?this.requisicoes.filter(s=>s.status===this.filtroStatus):this.requisicoes}},mounted(){this.carregar()},methods:{mensagemErro(s,e){var i,d;return((d=(i=s==null?void 0:s.response)==null?void 0:i.data)==null?void 0:d.error)||e},async carregar(){const[s,e,i]=await Promise.allSettled([w.getAgente(),w.getAgenteRequisicoes(),w.getAgenteStats()]);s.status==="fulfilled"?this.agente=s.value.data:this.$toast.add({severity:"error",summary:"Erro",detail:this.mensagemErro(s.reason,"Não foi possível carregar a configuração do agente."),life:5e3}),e.status==="fulfilled"&&(this.requisicoes=e.value.data),i.status==="fulfilled"&&(this.kpis=i.value.data.kpis||[],this.consumoClientes=i.value.data.consumoClientes||[]),this.carregado=!0},abrirConfig(){this.formConfig={apiKey:"",modelo:this.agente.modelo,diretrizes:this.agente.diretrizes,temperatura:this.agente.temperatura,maxTokens:this.agente.maxTokens,timeout:this.agente.timeout},this.testeDialog={status:null,mensagem:"",testando:!1},this.mostrarAvancado=!1,this.dialogConfig=!0},async executarTeste(s,e){e.testando=!0;try{const{data:i}=await w.postAgenteTestar(s);e.status="ok",e.mensagem=`Conexão OK — ${i.nome}`}catch(i){e.status="erro",e.mensagem=this.mensagemErro(i,"Não foi possível testar a conexão.")}finally{e.testando=!1}},async testarConexaoSalva(){await this.executarTeste({},this.conexao),this.conexao.status==="ok"&&this.$toast.add({severity:"success",summary:"Conexão OK",detail:this.conexao.mensagem,life:4e3})},testarConexaoFormulario(){return this.executarTeste({apiKey:this.formConfig.apiKey||void 0,modelo:this.formConfig.modelo},this.testeDialog)},async salvarConfiguracoes(){this.salvando=!0;try{const s={...this.formConfig};s.apiKey||delete s.apiKey;const{data:e}=await w.putAgenteConfig(s);this.agente=e,this.conexao={status:null,mensagem:"",testando:!1},this.dialogConfig=!1,this.$toast.add({severity:"success",summary:"Configurações salvas",detail:s.apiKey?"A nova chave de API já está em uso.":"O agente foi atualizado.",life:4e3})}catch(s){this.$toast.add({severity:"error",summary:"Erro ao salvar",detail:this.mensagemErro(s,"Não foi possível salvar as configurações."),life:6e3})}finally{this.salvando=!1}},exportarCsv(){const s=["data","hora","clienteNome","tema","tokens","tempo","status","detalhes"],e=g=>`"${String(g??"").replace(/"/g,'""')}"`,i=[s.join(";"),...this.requisicoesFiltradas.map(g=>s.map(f=>e(g[f])).join(";"))],d=new Blob(["\uFEFF"+i.join(`
`)],{type:"text/csv;charset=utf-8"}),t=URL.createObjectURL(d),n=document.createElement("a");n.href=t,n.download=`requisicoes-ia-${new Date().toISOString().slice(0,10)}.csv`,n.click(),URL.revokeObjectURL(t)},reqStatusSeverity(s){return Me[s]??"secondary"},formatarTempo(s){return s?s>=1e3?`${(s/1e3).toFixed(1)}s`:`${s}ms`:"—"},tempoClasse(s){return s>=6e4?"tempo-critico":s>=2e4?"tempo-lento":"tempo-ok"}}},He={class:"agente-page"},Ge={class:"page-header"},Ye={class:"header-left"},Je={class:"header-title-row"},Qe={class:"page-title"},We={class:"header-actions"},Xe={class:"kpi-grid"},Ze={class:"kpi-inner"},$e={class:"kpi-top"},es={class:"kpi-valor"},ss={class:"kpi-label"},os={class:"body-grid"},ts={class:"main-col"},as={class:"section-title-row"},is={class:"section-title-left"},ns={class:"section-title-right"},rs={class:"data-cell"},ls={class:"cliente-cell"},ds=["title"],cs={class:"sidebar-col"},us={class:"config-list"},ms={class:"config-item"},ps={class:"config-val mono"},gs={class:"config-item"},fs={class:"config-val"},bs={class:"config-row"},vs={class:"config-item"},hs={class:"config-val"},ys={class:"config-item"},xs={class:"config-val"},ws={class:"config-item"},ks={class:"config-val"},Cs={class:"prompt-box"},Ss={key:0,class:"consumo-vazio"},zs={class:"consumo-top"},_s={class:"cliente-cell"},Ps={class:"consumo-nome"},Ts={class:"consumo-tokens"},qs={key:0,class:"detalhe-req"},As={key:0},Is={class:"prompt-box"},Os={class:"dialog-form"},js={class:"field"},Ds={class:"field-hint"},Vs={class:"mono"},Bs={class:"field"},Rs={class:"teste-row"},Es={key:0,class:"teste-ok"},Ks={key:1,class:"teste-erro"},Ns={class:"field"},Ls={class:"field-hint"},Fs={key:0,class:"field-row-3"},Ms={class:"field"},Us={class:"field"},Hs={class:"field"};function Gs(s,e,i,d,t,n){const g=Z,f=me,x=M,_=W,U=ge,I=$,y=ee,H=se,G=he,Y=ve,O=pe,J=be,Q=F,A=oe,j=X;return c(),m("div",He,[o("div",Ge,[o("div",Ye,[e[12]||(e[12]=o("div",{class:"agente-avatar"},[o("i",{class:"pi pi-android"})],-1)),o("div",null,[o("div",Je,[o("h2",Qe,l(t.agente.nome||"Agente de IA"),1),t.agente.modelo?(c(),v(g,{key:0,value:t.agente.modelo,severity:"info"},null,8,["value"])):p("",!0),t.conexao.status==="ok"?(c(),v(g,{key:1,value:"Conectado",severity:"success",icon:"pi pi-check"})):t.conexao.status==="erro"?(c(),v(g,{key:2,value:"Falha na conexão",severity:"danger",icon:"pi pi-times"})):p("",!0)]),e[11]||(e[11]=o("small",{class:"page-sub"},"Configuração do agente usado na geração de trilhas por todas as prefeituras.",-1))])]),o("div",We,[r(f,{label:"Testar conexão",icon:"pi pi-wifi",severity:"secondary",outlined:"",loading:t.conexao.testando,disabled:!t.agente.apiKeyConfigurada,onClick:n.testarConexaoSalva},null,8,["loading","disabled","onClick"]),r(f,{label:"Editar configurações",icon:"pi pi-cog",onClick:n.abrirConfig},null,8,["onClick"])])]),t.carregado&&!t.agente.apiKeyConfigurada?(c(),v(x,{key:0,severity:"warn",closable:!1},{default:u(()=>e[13]||(e[13]=[b(" Nenhuma chave de API do Gemini configurada. As prefeituras não conseguirão gerar trilhas até que uma chave seja cadastrada em "),o("b",null,"Editar configurações",-1),b(". ")])),_:1,__:[13]})):p("",!0),t.agente.promptLegado?(c(),v(x,{key:1,severity:"info",closable:!1},{default:u(()=>e[14]||(e[14]=[b(" O prompt completo antigo foi substituído por um prompt fixo que garante a estrutura das trilhas. Ele não está mais sendo usado — revise as "),o("b",null,"diretrizes adicionais",-1),b(" e salve as configurações para descartá-lo. ")])),_:1,__:[14]})):p("",!0),t.conexao.status==="erro"?(c(),v(x,{key:2,severity:"error",closable:!1},{default:u(()=>[b(l(t.conexao.mensagem),1)]),_:1})):p("",!0),o("div",Xe,[(c(!0),m(D,null,V(t.kpis,a=>(c(),v(_,{key:a.label,class:"kpi-card"},{content:u(()=>[o("div",Ze,[o("div",$e,[o("div",{class:"kpi-icon",style:T({background:a.bg})},[o("i",{class:k(a.icon),style:T({color:a.color})},null,6)],4),a.delta?(c(),v(g,{key:0,value:a.delta,severity:a.deltaSev},null,8,["value","severity"])):p("",!0)]),o("span",es,l(a.valor),1),o("small",ss,l(a.label),1)])]),_:2},1024))),128))]),o("div",os,[o("div",ts,[r(_,null,{title:u(()=>[o("div",as,[o("div",is,[e[15]||(e[15]=o("i",{class:"pi pi-list-check section-icon"},null,-1)),e[16]||(e[16]=o("span",null,"Uso Recente",-1)),r(U,{value:n.requisicoesFiltradas.length,severity:"secondary"},null,8,["value"])]),o("div",ns,[r(I,{modelValue:t.filtroStatus,"onUpdate:modelValue":e[0]||(e[0]=a=>t.filtroStatus=a),options:t.opcoesStatus,placeholder:"Todos os status",showClear:"",size:"small",style:{"min-width":"160px"}},null,8,["modelValue","options"]),q(r(f,{icon:"pi pi-download",severity:"secondary",outlined:"",size:"small",disabled:!n.requisicoesFiltradas.length,onClick:n.exportarCsv},null,8,["disabled","onClick"]),[[j,"Exportar CSV",void 0,{top:!0}]])])])]),content:u(()=>[r(H,{value:n.requisicoesFiltradas,paginator:!0,rows:8,rowsPerPageOptions:[8,20,50],paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport",currentPageReportTemplate:"{first}–{last} de {totalRecords}",sortField:"id",sortOrder:-1,stripedRows:"",dataKey:"id",loading:!t.carregado},{empty:u(()=>e[17]||(e[17]=[o("div",{class:"table-empty"},[o("i",{class:"pi pi-inbox",style:{"font-size":"2rem",opacity:"0.3"}}),o("p",null,"Nenhuma requisição encontrada.")],-1)])),default:u(()=>[r(y,{field:"id",header:"Data / Hora",sortable:"",style:{width:"130px"}},{body:u(({data:a})=>[o("div",rs,[o("span",null,l(a.data),1),o("small",null,l(a.hora),1)])]),_:1}),r(y,{field:"clienteNome",header:"Prefeitura",sortable:"",style:{"min-width":"170px"}},{body:u(({data:a})=>[o("div",ls,[o("div",{class:"cliente-dot",style:T({background:a.clienteCor})},null,4),o("span",null,l(a.clienteNome),1)])]),_:1}),r(y,{field:"tema",header:"Tema",style:{"min-width":"190px"}},{body:u(({data:a})=>[o("span",{class:"tema-cell",title:a.tema},l(a.tema||a.tipo),9,ds)]),_:1}),r(y,{field:"tokens",header:"Tokens",sortable:"",style:{width:"100px"}},{body:u(({data:a})=>[b(l(a.tokens?a.tokens.toLocaleString("pt-BR"):"—"),1)]),_:1}),r(y,{field:"tempo",header:"Tempo",sortable:"",style:{width:"90px"}},{body:u(({data:a})=>[o("span",{class:k(["tempo-val",n.tempoClasse(a.tempo)])},l(n.formatarTempo(a.tempo)),3)]),_:1}),r(y,{field:"status",header:"Status",style:{width:"110px"}},{body:u(({data:a})=>[r(g,{value:a.status,severity:n.reqStatusSeverity(a.status)},null,8,["value","severity"])]),_:1}),r(y,{style:{width:"52px"}},{body:u(({data:a})=>[q(r(f,{icon:"pi pi-eye",rounded:"",text:"",severity:"secondary",size:"small",onClick:Ys=>t.requisicaoSelecionada=a},null,8,["onClick"]),[[j,"Ver detalhes",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","loading"])]),_:1})]),o("div",cs,[r(_,null,{title:u(()=>e[18]||(e[18]=[o("div",{class:"section-title-left"},[o("i",{class:"pi pi-cog section-icon"}),o("span",null,"Configuração Atual")],-1)])),content:u(()=>[o("div",us,[o("div",ms,[e[19]||(e[19]=o("small",{class:"config-label"},"Chave de API",-1)),o("span",ps,l(t.agente.apiKeyConfigurada?t.agente.apiKeyMasked:"Não configurada"),1)]),o("div",gs,[e[20]||(e[20]=o("small",{class:"config-label"},"Modelo",-1)),o("span",fs,l(t.agente.modelo||"—"),1)]),o("div",bs,[o("div",vs,[e[21]||(e[21]=o("small",{class:"config-label"},"Temperatura",-1)),o("span",hs,l(t.agente.temperatura),1)]),o("div",ys,[e[22]||(e[22]=o("small",{class:"config-label"},"Máx. tokens",-1)),o("span",xs,l((t.agente.maxTokens||0).toLocaleString("pt-BR")),1)]),o("div",ws,[e[23]||(e[23]=o("small",{class:"config-label"},"Timeout",-1)),o("span",ks,l(t.agente.timeout)+"s",1)])])]),r(G),e[24]||(e[24]=o("small",{class:"config-label"},"Diretrizes adicionais",-1)),o("div",Cs,l(t.agente.diretrizes||"Nenhuma — usando apenas o prompt padrão."),1)]),_:1}),r(_,null,{title:u(()=>e[25]||(e[25]=[o("div",{class:"section-title-left"},[o("i",{class:"pi pi-chart-bar section-icon"}),o("span",null,"Consumo no mês")],-1)])),content:u(()=>[t.consumoClientes.length?p("",!0):(c(),m("div",Ss,"Nenhuma geração neste mês.")),(c(!0),m(D,null,V(t.consumoClientes,a=>(c(),m("div",{key:a.id,class:"consumo-item"},[o("div",zs,[o("div",_s,[o("div",{class:"cliente-dot",style:T({background:a.cor})},null,4),o("span",Ps,l(a.nome),1)]),o("small",null,l(a.trilhasIAMes)+"/"+l(a.limiteTrilhasIA),1)]),r(Y,{value:Math.min(a.percentual,100),showValue:!1,class:k(["consumo-bar",a.percentual>=100?"pbar-danger":a.percentual>=80?"pbar-warn":""])},null,8,["value","class"]),o("small",Ts,l(a.tokens.toLocaleString("pt-BR"))+" tokens",1)]))),128))]),_:1})])]),r(O,{visible:!!t.requisicaoSelecionada,"onUpdate:visible":e[1]||(e[1]=a=>t.requisicaoSelecionada=null),header:"Detalhes da requisição",modal:!0,style:{width:"480px"},draggable:!1},{default:u(()=>[t.requisicaoSelecionada?(c(),m("div",qs,[o("div",null,[e[26]||(e[26]=o("small",{class:"config-label"},"Prefeitura",-1)),o("span",null,l(t.requisicaoSelecionada.clienteNome),1)]),o("div",null,[e[27]||(e[27]=o("small",{class:"config-label"},"Tema",-1)),o("span",null,l(t.requisicaoSelecionada.tema||"—"),1)]),o("div",null,[e[28]||(e[28]=o("small",{class:"config-label"},"Data",-1)),o("span",null,l(t.requisicaoSelecionada.data)+" "+l(t.requisicaoSelecionada.hora),1)]),o("div",null,[e[29]||(e[29]=o("small",{class:"config-label"},"Status",-1)),r(g,{value:t.requisicaoSelecionada.status,severity:n.reqStatusSeverity(t.requisicaoSelecionada.status)},null,8,["value","severity"])]),o("div",null,[e[30]||(e[30]=o("small",{class:"config-label"},"Tokens / tempo",-1)),o("span",null,l((t.requisicaoSelecionada.tokens||0).toLocaleString("pt-BR"))+" · "+l(n.formatarTempo(t.requisicaoSelecionada.tempo)),1)]),t.requisicaoSelecionada.detalhes?(c(),m("div",As,[e[31]||(e[31]=o("small",{class:"config-label"},"Mensagem",-1)),o("div",Is,l(t.requisicaoSelecionada.detalhes),1)])):p("",!0)])):p("",!0)]),_:1},8,["visible"]),r(O,{visible:t.dialogConfig,"onUpdate:visible":e[10]||(e[10]=a=>t.dialogConfig=a),header:"Configurações do Agente",modal:!0,style:{width:"600px"},breakpoints:{"640px":"95vw"},draggable:!1},{footer:u(()=>[r(f,{label:"Cancelar",severity:"secondary",text:"",onClick:e[9]||(e[9]=a=>t.dialogConfig=!1)}),r(f,{label:"Salvar configurações",icon:"pi pi-check",loading:t.salvando,onClick:n.salvarConfiguracoes},null,8,["loading","onClick"])]),default:u(()=>[o("div",Os,[o("div",js,[e[34]||(e[34]=o("label",null,"Chave de API do Gemini",-1)),o("small",Ds,[e[32]||(e[32]=b(" Atual: ")),o("span",Vs,l(t.agente.apiKeyConfigurada?t.agente.apiKeyMasked:"não configurada"),1),e[33]||(e[33]=b(". Deixe em branco para manter a chave atual. "))]),r(J,{modelValue:t.formConfig.apiKey,"onUpdate:modelValue":e[2]||(e[2]=a=>t.formConfig.apiKey=a),feedback:!1,toggleMask:"",placeholder:"Cole aqui uma nova chave (AIza...)",class:"w-full",inputClass:"w-full",autocomplete:"off"},null,8,["modelValue"])]),o("div",Bs,[e[35]||(e[35]=o("label",null,"Modelo",-1)),r(I,{modelValue:t.formConfig.modelo,"onUpdate:modelValue":e[3]||(e[3]=a=>t.formConfig.modelo=a),options:t.sugestoesModelo,editable:"",placeholder:"ex.: gemini-2.5-flash",class:"w-full"},null,8,["modelValue","options"]),e[36]||(e[36]=o("small",{class:"field-hint"},"Escolha uma sugestão ou digite o identificador de outro modelo disponível para a sua chave.",-1))]),o("div",Rs,[r(f,{label:"Testar com estes dados",icon:"pi pi-wifi",severity:"secondary",outlined:"",size:"small",loading:t.testeDialog.testando,onClick:n.testarConexaoFormulario},null,8,["loading","onClick"]),t.testeDialog.status==="ok"?(c(),m("small",Es,[e[37]||(e[37]=o("i",{class:"pi pi-check-circle"},null,-1)),b(" "+l(t.testeDialog.mensagem),1)])):t.testeDialog.status==="erro"?(c(),m("small",Ks,[e[38]||(e[38]=o("i",{class:"pi pi-times-circle"},null,-1)),b(" "+l(t.testeDialog.mensagem),1)])):p("",!0)]),o("div",Ns,[e[39]||(e[39]=o("label",null,[b("Diretrizes adicionais "),o("span",{class:"opcional"},"(opcional)")],-1)),r(Q,{modelValue:t.formConfig.diretrizes,"onUpdate:modelValue":e[4]||(e[4]=a=>t.formConfig.diretrizes=a),rows:"5",autoResize:"",class:"w-full",maxlength:2e3,placeholder:"Ex.: Baseie as questões na legislação federal vigente e cite o artigo da lei nas mensagens de reforço. Use linguagem simples."},null,8,["modelValue"]),o("small",Ls," A estrutura da trilha (módulos, questões, alternativas e mensagens de reforço) já é garantida automaticamente. Use este campo apenas para orientar tom, foco e fontes. "+l((t.formConfig.diretrizes||"").length)+"/2000 ",1)]),o("div",{class:"avancado-toggle",onClick:e[5]||(e[5]=a=>t.mostrarAvancado=!t.mostrarAvancado)},[o("i",{class:k(t.mostrarAvancado?"pi pi-chevron-down":"pi pi-chevron-right")},null,2),e[40]||(e[40]=o("span",null,"Configurações avançadas",-1))]),t.mostrarAvancado?(c(),m("div",Fs,[o("div",Ms,[e[41]||(e[41]=o("label",null,"Temperatura",-1)),r(A,{modelValue:t.formConfig.temperatura,"onUpdate:modelValue":e[6]||(e[6]=a=>t.formConfig.temperatura=a),min:0,max:2,step:.1,minFractionDigits:1,maxFractionDigits:1,showButtons:"",class:"w-full"},null,8,["modelValue"])]),o("div",Us,[e[42]||(e[42]=o("label",null,"Máx. tokens / req.",-1)),r(A,{modelValue:t.formConfig.maxTokens,"onUpdate:modelValue":e[7]||(e[7]=a=>t.formConfig.maxTokens=a),min:1024,max:65536,step:1024,showButtons:"",class:"w-full"},null,8,["modelValue"])]),o("div",Hs,[e[43]||(e[43]=o("label",null,"Timeout (s)",-1)),r(A,{modelValue:t.formConfig.timeout,"onUpdate:modelValue":e[8]||(e[8]=a=>t.formConfig.timeout=a),min:10,max:300,step:10,showButtons:"",class:"w-full"},null,8,["modelValue"])]),e[44]||(e[44]=o("small",{class:"field-hint field-span"}," Cada módulo é gerado em uma requisição separada. Modelos com raciocínio (ex.: Gemini 2.5) gastam parte dos tokens pensando — se aparecer erro de limite de tokens, aumente o máximo (16.384 ou mais). ",-1))])):p("",!0)])]),_:1},8,["visible"])])}const so=ue(Ue,[["render",Gs],["__scopeId","data-v-92d56e71"]]);export{so as default};
