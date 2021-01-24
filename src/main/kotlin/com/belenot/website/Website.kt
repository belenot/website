package com.belenot.website

import io.ktor.application.Application
import io.ktor.application.install
import io.ktor.features.CallLogging
import io.ktor.http.content.defaultResource
import io.ktor.http.content.resource
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import org.slf4j.LoggerFactory

fun main(args: Array<String>) {
    embeddedServer(Netty, 8080) {
        module()
    }.start(true)
}


fun Application.module() {

    install(CallLogging) {
        logger = LoggerFactory.getLogger("CallLogger")
    }

    routing {
        static {
            resources("static")
            defaultResource("static/index.html")
        }
    }
}