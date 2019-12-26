package com.cq.myinsurance.shiro;


import at.pollux.thymeleaf.shiro.dialect.ShiroDialect;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.LinkedHashMap;
import java.util.Map;

@Configuration
public class ShiroConfig {
//    用于thymeleaf模板使用shiro标签
    @Bean
    public ShiroDialect shiroDialect(){
        return new ShiroDialect();
    }


//    拦截请求url
    @Bean
    public ShiroFilterFactoryBean shiroFilter(@Qualifier("securityManager")DefaultWebSecurityManager securityManager){
        ShiroFilterFactoryBean bean=new ShiroFilterFactoryBean();
//       设置安全管理器
        bean.setSecurityManager( securityManager);

//        创建集合统一做拦截器
        Map<String,String> filterchain=new LinkedHashMap<>();
        filterchain.put("/login.do","anon");
        filterchain.put("/vendors/**","anon");
        filterchain.put("/js/**","anon");
        filterchain.put("/*","authc");
        filterchain.put("/pages/**","authc");


//        filterchain.put("/pages/adjustmentmanager/**","permissions[理赔管理]");

//        角色配置
//        filterchain.put("/pages/lossmanager/**","roles[定损员]");
//        filterchain.put("/pages/lossmanager/**","roles[定损员]");
//       shiro拦截成功后，会返回一个默认的地址
        bean.setLoginUrl("/login");
//        bean.setSuccessUrl("/pages/welcome/index");
        bean.setFilterChainDefinitionMap(filterchain);
        return bean;
    }

//   创建DefaultWebSecurityManager——关联realm（连接数据库）
    @Bean("securityManager")
    public DefaultWebSecurityManager getDefaultWebSecurityManager(@Qualifier("myRealm")MyRealm myRealm){
          DefaultWebSecurityManager defaultWebSecurityManager=new DefaultWebSecurityManager();
          defaultWebSecurityManager.setRealm(myRealm);
          return  defaultWebSecurityManager;
    }

    @Bean
    public MyRealm myRealm(){
        return new MyRealm();
    }


}
